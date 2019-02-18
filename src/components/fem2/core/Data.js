
const STOPRUN = Math.random() * 10e16;

function monkey(fun, before) {
  return function proxyFun(...args) {
    let _args = args;
    if (before) {
      _args = before.bind(this)(args);
      if(_args === STOPRUN) {
        return args;
      }
    }

    return fun.apply(this, _args);
  }
}

function noValue(value){
  return (value === null || value === undefined);
}

/*
 预定义聚合函数
 */
const _AGGREGATES= {
  'sum': (param = {}) => {
    const {field, value, item, defaultValue} = param;  
    const currentValue = noValue(value) ? defaultValue: value;
    const itemValue = noValue(item[field]) ? defaultValue : item[field]; 
    return currentValue + itemValue;
  },
  'aver': (param = {}) => {
    const {field, item, defaultValue, keyCounts, data} = param;
    const itemValue = noValue(item[field]) ? defaultValue : item[field];    
    const tempValueKey = `_currentSumValue.${field}`;
    if (data[tempValueKey] === undefined) {
      data[tempValueKey] = defaultValue;
    }
    return (data[tempValueKey] += itemValue) / (keyCounts + 1);
  },
  'max': (param = {}) => {
    const {field, value, item, defaultValue} = param;   
    const currentValue = noValue(value) ? -Infinity: value;
    const itemValue = noValue(item[field]) ? defaultValue : item[field];  
    return currentValue > itemValue ? currentValue : itemValue;
  },
  'min': (param = {}) => {
    const {field, value, item, defaultValue} = param;   
    const currentValue = noValue(value) ? Infinity: value;
    const itemValue = noValue(item[field]) ? defaultValue : item[field];
    return currentValue < itemValue ? currentValue : itemValue;
  },
  'count': ({keyCounts}) => keyCounts + 1,
  'join': (param = {}) => {
    const {field, value, item, option, keyCounts, defaultText} = param;
    const itemValue = noValue(item[field]) ? defaultText : item[field];
    if (keyCounts === 0) {
      return itemValue;
    }
    return `${value}${option.$split || ','}${itemValue}`;
  }
};

const AGGREGATES = {..._AGGREGATES};
export {AGGREGATES};

/*
  一个值只写入一遍的list
*/
class _uniList {
  constructor(){
    this._list =[];
    const _keyMap = this._keyMap = {};  
    this._list.push = monkey(this._list.push, function(args){
      const value = args[0];
      if(_keyMap[value]){
        return STOPRUN;     
      }
      _keyMap[value] = 1;
      return args;
    })
    return this._list;
  }
}

/*
  按照KEY的插入顺序遍历的map
*/
export class OrderedMap {
  constructor(name = null){
    this.name = name;
    this._map = {};
    this._keyMap = {};
    this._keyList = [];
    this._keyCount = {};
  }

  put(key, value){
    if (!this._keyMap[key]) {
      this._keyList.push(key);
      this._keyMap[key] = 1;
      this._keyCount[key] = 0;
    }
    this._keyCount[key]++;
    return this._map[key] = value;
  }

  get(key, blankMap = false ) {
    if(noValue(this._map[key]) && blankMap){
      return new OrderedMap();
    }
    return this._map[key];
  }
  
  trace(param = {_list:[], _item: {}}){
    const {_list, _item } = param;
     
    if(this.name === null) {
      this.keys().forEach(key => {
        _item[key] = this.get(key);
      });
      _list.push(_item);      
    } else {
      this.keys().forEach(key => {
        _item[this.name] = key;
        param._item = {..._item};
        this.get(key).trace(param);
      });
    }
    
    return param;
  }

  keyCounts(key) {
    return this._keyCount[key] || 0;
  }

  keys() {
    return this._keyList;
  }

  values() {
    return this._keyList.map((key) => {
        return this._map[key]
    })
  }
}

export class DataSet {
  constructor(config = {}) {
    this._init(config);
  }
  
  _init(config){
    const {
      dataSource = [],
      groupFields = [],
      valueFields = [],
      aggregate = {},
      option = {
        $defaultValue: 0,
        $defaultText: '',
        $split : ','
      }
    } = config;

    Object.assign(this, {
      _dataSource: dataSource,
      _groupFields: [].concat(groupFields),
      _valueFields:[].concat(valueFields) ,
      _defaultValue: option.$defaultValue,
      _defaultText: option.$defaultText,
      _config: config,
      _data: new OrderedMap(groupFields[0]),
      _option: option,
      _currentCount: 0,
      _groupFieldValues: groupFields.map( () => (new _uniList()))
    });
    
    this._aggregate = {};
    this._valueFields.forEach(field => {
      this._aggregate[field] = aggregate[field] || _AGGREGATES['sum'];
    });

    dataSource.forEach(item => this._add(item));
  }
  
  _add(item = {}) {
    this._currentCount++;
    
    let currentData = this._data;
    this._groupFields.forEach((groupField, index) => {
      if(!currentData.get(item[groupField])) {
        currentData.put(item[groupField], new OrderedMap(this._groupFields[index + 1]));
      }
      currentData = currentData.get(item[groupField]);
      this._groupFieldValues[index].push(item[groupField]);
    });

    this._valueFields.forEach((valueField) => {
      const aggregate = this._aggregate[valueField];
      const currentValue = aggregate({
        field: valueField,
        value: currentData.get(valueField),
        item,
        uniKey: aggregate.uniKey,
        keyCounts: currentData.keyCounts(valueField),
        option: this._option,
        count: this._currentCount, 
        defaultValue: this._defaultValue,
        defaultText: this._defaultText,
        data: currentData
      });
      currentData.put(valueField, currentValue); 
    });    
  } 

  output() {
    
    const fields = {};
    this._groupFieldValues.forEach((a, i) => {
      fields[this._groupFields[i]] = [].concat(a);
    });
    
    return {
      enums: fields,
      list: this._data.trace()._list
    };
  }
}

