/*
 空值检查函数
 */
export function noValue(value) {
  return (value === null || value === undefined);
}

/*
 预定义的聚合函数
 */
const _aggregates = {
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
  },
  // 原始数据数组
  'origin': ({value, item}) => {
    value = value || [];
    value.push(item);
    return value;
  },
};

export const aggregates = {..._aggregates};

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
     转成普通的Objec
   */
  toObject() {
    const obj = {};
    for (let [key, value] of this.entries()) {
      obj[key] = value;
    }
    return obj;
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

function traceObj(obj = {}, _dataMap = new DataMap()) {
  for (let key in obj) {
    const value = obj[key];
    if(typeof value === 'object' && !Array.isArray(value)) {
      traceObj(value, _dataMap);
    } else {
      _dataMap.set(key, value);
    }
  }
  return _dataMap;
}

DataMap.fromObject = function(obj = {}) {
  return traceObj(obj);
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
      if (typeof aggregate[field] === 'string') {
        aggregate[field] = _aggregates[aggregate[field]];
      }
      this._aggregate[field] = aggregate[field] || _aggregates['sum'];
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


  getData() {  
    const fields = {};
    this._groupFieldValues.forEach((valueSet, index) => {
      fields[this._groupFields[index]] = Array.from(valueSet) ;
    }); 

    const result = this._data.toObjectInArray();
    result.$refs = result.$refs || {};
    result.$refs.enums = fields;
    return result;
  }
}

function strToConfig(config) {
  if(typeof config === 'object'){
    return config;
  }
  const _config = {
    aggregate: {}
  };
  
  const [groupFieldStr = '', valueFieldStr = ''] = config.replace(/^\s+|\s+$/g,'').split('=>');
  const groupFields = groupFieldStr.replace(/^\s+|\s+$/g, '').split(',').map(field => field.replace(/^\s+|\s+$/g,''));
  const valueFields = valueFieldStr.replace(/^\s+|\s+$/g, '').split(',').map(field => {
    field = field.replace(/^\s+|\s+$/g, '');
    const [fieldName, aggregateType] = field.split(':');
    if(aggregateType && _aggregates[aggregateType]) {
      _config.aggregate[fieldName] = _aggregates[aggregateType];
    }
    return fieldName.replace(/^\s+|\s+$/g,'');
  });
  
  _config.groupFields = groupFields;
  _config.valueFields = valueFields;
  
  return _config;
}

export function traceObject(obj, trace) {
  if (typeof trace === 'string') {
    trace = trace.split('.');
  }
  if (typeof obj !== 'object' || noValue(obj)) {
    return;
  }

  const field = trace.shift();
  const value = obj[field];
  if (!trace.length) {
    return value;
  }
  return traceObject(value, trace);
}

class TransformProcess {
  constructor(source) {
    this.source = source;
    this.data;
  }
  
//fromStruct(config) {
//  config.forEach(fieldMap => {
//    const {from, to, default: _default, set} = fieldMap;
//    const froms = from.split('|');
//    let value;
//    
//  })
//}
  
  toGrouped(config = {}){   
    config = strToConfig(config);
    config.dataSource = this.source;
    const tf = new DataSetTransformer(config);
    this.data = tf.getData();
    this.data.$refs = this.data.$refs || {};
    this.data.$refs.dataMap = tf._data;
    return new TransformProcess(this.data);
  }
  
  toSeries(config = {}){
    config = strToConfig(config);
    this.toGrouped(config);
    const seriesField = config.groupFields[1] || null;
    const $refs = this.data.$refs;
    const series = new Map();
    this.data.forEach(item => {
      if(!series.get(seriesField)){
         series.set(item[seriesField], []);
      }
      series.get(seriesField).push(item);
    });
    this.data = Array.from(series.keys()).map(name => ({name, data: series.get(name)}));
    $refs.seriesData = this.data;
    this.data.$refs = $refs;

    return new TransformProcess(this.data);
  }

  toNumSeries(config = {}) {
    config = strToConfig(config);
    this.toSeries(config);
    const $refs = this.data.$refs;
    const xField = $refs.enums[config.groupFields[0]] || [];  
    const tempMap = {};
    this.data.forEach(item => {
      tempMap[item[config.groupFields[0]]] = item;
    });

    this.data = xField.map(xValue=> {
      if(!noValue(tempMap[xValue])) {
        return tempMap[xValue][config.valueFields[0]];
      }
      return null;
    });
    
    this.data.$refs = $refs;  
    return new TransformProcess(this.data);
  }
  
  toPieSeries(config = {}) {
    config = strToConfig(config);
    this.toSeries(config);
    const $refs = this.data.$refs;
    $refs.seriesData = this.data;
    this.data = this.data.map(item => ({
      key: item[config.groupFields[0]],
      value: item[config.valueFields[0]]}));
    this.data.$refs = $refs;
    return new TransformProcess(this.data);
  }
  
  toHeatSeries(config = {}) {
    config = strToConfig(config);
    this.toSeries(config);
    const $refs = this.data.$refs;
    this.data = this.data.map(item => ([
      item[config.groupFields[0]],
      item[config.groupFields[1]],
      item[config.valueFields[0]]]));
    this.data.$refs = $refs;
    return new TransformProcess(this.data);
  }
  
  toRadarSeries(config = {}) {
    config = strToConfig(config);
    this.toGrouped(config);
    const $refs = this.data.$refs;
    $refs.indicator
    
    
    return new TransformProcess(this.data);
  }
  
  getData() {
    return noValue(this.data) ? this.source : this.data;
  }
  
}

export default function $Transform(source){
  return new TransformProcess(source);
}
