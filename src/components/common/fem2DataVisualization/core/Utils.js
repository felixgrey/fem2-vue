import {noValue, transform} from './Data';

export const blank = () => {};

export function deepMerge(to = null, from, leaves = [], _hasCloned = new Map()) { 
  if(arguments.length === 1) {
    from = to;
    to = null;
  }
  const isObj = typeof from === 'object' && from !== null;
  if(isObj) {
    if(_hasCloned.has(from)){
      return _hasCloned.get(from);
    }   
  }

  if (Array.isArray(from)) { 
    to = noValue(to) ? [] : to;
    _hasCloned.set(from, to);
    from.forEach((item, index) => {
      to[index] = deepMerge(to[index], item, leaves, _hasCloned);
    });    
  } else if (isObj) {
    to = noValue(to) ? {} : to;
    _hasCloned.set(from, to);
    Object.keys(from).forEach((name) => {
      if(leaves.indexOf(name) !== -1) {
         to[name] = from[name];
         return;
      }
      to[name] = deepMerge(to[name], from[name], leaves, _hasCloned);
    });
  } else {
    return from;
  }
  
  return to;
}

export function mergeConfig(obj ={}, cfg = {}, defaultValue = {}) {
  for (let name in cfg) {
    const _name = `_${name}`;
    if(obj[_name] === undefined) {
      obj[_name] = cfg[name] === undefined ? defaultValue[name] : cfg[name];
    }
  }
  
  for (let name in defaultValue) {
    const _name = `_${name}`;
    if(obj[_name] === undefined) {
      obj[_name] = defaultValue[name];
    }
  }
  
  return obj;
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

transform.fromStructInArray = function (list = [], option) {
  if(typeof option !== 'object'){
    return list;
  }
  list = [].concat(list);
  const optionIsArray = Array.isArray(option);
  if (optionIsArray) {
    option = {default: option};
  }
  
  const seriesMap = {};
  
  Object.keys(option).forEach(name => {
    seriesMap[name] = [];
  });
  
  list.forEach(item => {
    Object.keys(option).forEach(name => {
      const _item ={};
      const fields = option[name];
      fields.forEach(fieldMap => {
        const {from, to, default: _default, set} = fieldMap;
        const froms = from.split('|');
        let value;
        for (let _from of froms) {
          value = traceObject(item, _from);
          if(value !== undefined){
            break;
          }
        }
        value = set ? set(value, item) : value;
        value = value === undefined ? _default : value;
        _item[to] = value;
      }); 
      seriesMap[name].push(_item);
    });
  });
  
  if(optionIsArray){
    return seriesMap.default;
  }
  return seriesMap;
};

transform.fromObject = function (obj, field) {
  return Object.keys(obj).map(key => {
    const item = obj[key];
    if(noValue(item) || typeof item === 'number') {
      return item;
    }
    item[field] = key;
    return item;
  })
};

const _originField = `_origin${Date.now()}`;

transform.forkByField = function(srouce , groupField) {
  const obj = {};
  transform({
    dataSource: srouce,
    groupFields:[groupField],
    aggregate:{
      [_originField]: transform.AGGREGATES.origin
    },
    valueFields:[_originField]
  }).list.forEach(item => {
    obj[item[groupField]] = item[_originField];
  });
  return obj;
}

transform.toObject = function(arr, keyField, valueField) {
  const obj = {};
  const getValue = valueField ? item => item[valueField] : item => item;
  arr.forEach(item => {
    obj[item[keyField]] = getValue(item);
  });
  return obj;
};

function TransformProcess(source){
  this.source = source;
}
const _tpProto = TransformProcess.prototype;

[
  'fromArrayInArray', 'fromObjectInArray', 'transportArrayInArray','toObject',
  'transportObjectInArray', 'fromStruct', 'fromStructInArray', 'fromObject', 'forkByField'
].forEach(funName => {
  _tpProto[funName] = function(...args) {
    return new TransformProcess(transform[funName](this.source, ...args));
  };
});

['filter', 'map', 'sort'].forEach(funName => {
  _tpProto[funName] = function(...args) {
    return new TransformProcess(([].concat(this.source))[funName](...args));
  };
});

_tpProto.operate = function(callback) {
  return new TransformProcess(callback(this.source));
};

_tpProto.transform = function(param = {}){
    param.dataSource = this.source;
    return new TransformProcess(transform(param));
};

_tpProto.output = function() {
  return this.source;
};

transform.process = function (source){
  return new TransformProcess(source);
};

