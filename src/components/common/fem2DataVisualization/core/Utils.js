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
