/*
 空值检查函数
 */
export function noValue(value) {
  return (value === null || value === undefined);
}

/*
 预定义的聚合函数
 */
const _AGGREGATES = {
  // 求和
  'sum': ({field, value, item, defaultValue}) => { 
    const currentValue = noValue(value) ? defaultValue: value;
    const itemValue = noValue(item[field]) ? defaultValue : item[field]; 
    return currentValue + itemValue;
  },
  // 平均值
  'aver': ({field, item, defaultValue, keyCounts, data}) => { 
    const itemValue = noValue(item[field]) ? defaultValue : item[field];    
    const tempValueKey = `_currentSumValue.${field}`;
    if (data[tempValueKey] === undefined) {
      data[tempValueKey] = defaultValue;
    }
    return (data[tempValueKey] += itemValue) / (keyCounts + 1);
  },
  // 最大值
  'max': ({field, value, item, defaultValue}) => { 
    const currentValue = noValue(value) ? -Infinity: value;
    const itemValue = noValue(item[field]) ? defaultValue : item[field];  
    return currentValue > itemValue ? currentValue : itemValue;
  },
  // 最小值  
  'min': ({field, value, item, defaultValue}) => { 
    const currentValue = noValue(value) ? Infinity: value;
    const itemValue = noValue(item[field]) ? defaultValue : item[field];
    return currentValue < itemValue ? currentValue : itemValue;
  },
   // 聚合条数
  'count': ({keyCounts}) => keyCounts + 1,
   // 字符串连接
  'join': ({field, value, item, option, keyCounts, defaultText}) => {
    const itemValue = noValue(item[field]) ? defaultText : item[field];
    return keyCounts === 0 ? `${itemValue}` : `${value}${option.$split || ','}${itemValue}`;
  }
};

const AGGREGATES = {..._AGGREGATES};
export {AGGREGATES};

/*
  树形数据结构，fieldName为分组字段值，为空表示是叶子节点
 */
export class DataMap extends Map {
  constructor(initData, fieldName = null) {
    super(initData);
    this.fieldName = fieldName;
    this._keyCount = {};
  }
  
  /*
    set时记录同一个key被set的次数
   */
  set(key, value) {
    if (this._keyCount[key] === undefined) {
      this._keyCount[key] = 0;
    }
    this._keyCount[key]++;
    super.set(key, value);
  }
  
  /*
     取得同一个key被set的次数
   */
  keyCounts(key) {
    return this._keyCount[key] || 0;
  }
  
  /*
     遍历数据并转为对象数组格式
  */
  toObjectInArray(_param = {_list: [], _item: {}}) {
    const {_list, _item } = _param;   
    const keys = Array.from(this.keys());  
    
    if (this.fieldName === null) {
      keys.forEach(key => {
        _item[key] = this.get(key);
      });
      _list.push(_item);      
    } else {
      keys.forEach(key => {
        _item[this.fieldName] = key;
        _param._item = {..._item};
        (this.get(key) || new DataMap()).toObjectInArray(_param);
      });
    } 
    
    return _param._list;
  }
}

/*
  用于做聚合操作的数据集
 */
export class DataSetTransformer {
  constructor(config = {}) {
    this._init(config);
  }
  
  _init(config) {
    const {
      dataSource = [], // 数据源
      groupFields = [], // 分组字段
      valueFields = [], // 聚合字段
      aggregate = {}, // 聚合函数
      option = { // 额外配置
        $defaultValue: 0, // 数值默认值
        $defaultText: '', // 字符串默认值
        $split : ',' // 字符串连接分隔符
      }
    } = config;

    Object.assign(this, {
      _dataSource: dataSource,
      _groupFields: [].concat(groupFields),
      _valueFields:[].concat(valueFields) ,
      _defaultValue: option.$defaultValue,
      _defaultText: option.$defaultText,
      _config: config,
      _data: new DataMap(null, groupFields[0]),
      _option: option,
      _currentCount: 0,
      _groupFieldValues: groupFields.map(() => new Set())
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
      if (!currentData.get(item[groupField])) {
        currentData.set(item[groupField], new DataMap(null, this._groupFields[index + 1]));
      }
      currentData = currentData.get(item[groupField]);
      this._groupFieldValues[index].add(item[groupField]);
    });

    this._valueFields.forEach((valueField) => {
      const aggregate = this._aggregate[valueField];
      
      const currentValue = aggregate({
        field: valueField,
        value: currentData.get(valueField),
        item,
        keyCounts: currentData.keyCounts(valueField),
        option: this._option,
        count: this._currentCount, 
        defaultValue: this._defaultValue,
        defaultText: this._defaultText,
        data: currentData
      });
      
      currentData.set(valueField, currentValue); 
    });    
  } 

  output() {  
    const fields = {};
    this._groupFieldValues.forEach((valueSet, index) => {
      fields[this._groupFields[index]] = Array.from(valueSet) ;
    }); 
    
    return {
      enums: fields,
      list: this._data.toObjectInArray()
    };
  }
}

/*
  数据集转换函数
 */
export function transform(config) {
  return new DataSetTransformer(config).output();
}
transform.AGGREGATES = AGGREGATES;

/*
 ArrayInArray to ObjectInArray
 */
transform.fromArrayInArray = function(dataSource) {
  dataSource = [].concat(dataSource);
  const fields = dataSource.shift() || {};
  return dataSource.map(item => {
    const value = {};
    fields.forEach((field, index) => {
      value[field] = item[index];
    });
    return value;
  });
}

/*
 interchange row and col
 */
transform.transportArrayInArray = function(dataSource) {
  dataSource = [].concat(dataSource);
  const fields = dataSource.shift() || {}; 
  return fields.map((field, index) => {
    return [field].concat(dataSource.map(row => row[index]));
  }); 
}

/*
 interchange object and array
 */
transform.transportObjectInArray = function(dataSource) {
  const fields = Object.keys(dataSource[0] || {});
  const series = {};
  fields.forEach(field => {
    series[field] = [];
  });
  dataSource.forEach(item => {
    fields.forEach(field => {
      series[field].push(item[field]);
    });
  });
  return series
}

/*
 ObjectInArray to ArrayInArray
 */
transform.fromObjectInArray = function(dataSource) {
  const fields = Object.keys(dataSource[0] || {});
  const newSource = dataSource.map(item => {
    return fields.map(field => item[field]);
  });
  newSource.splice(0, 0, fields);
  return newSource;
}
