import {noValue} from './Data';

export const blank = () => {};

export function deepMerge(to = null, from, leaves = [], _hasCloned = new Map()) { 
  if(arguments.length === 1) {
    from = to;
    to = null;
  }
  const isObj = typeof from === 'object';
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

export function fromStructInArray(list = [], option) {
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
        let value = traceObject(item, from);
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
}
