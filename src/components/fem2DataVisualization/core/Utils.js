import {transform} from './Data';

export const blank = () => {};

let _resolve;
export const bmpApiReady = new Promise((resolve) => {
  _resolve = resolve;
});

Object.defineProperty(transform, 'bmapAK',{
  set: function(bmapAK) {
    const {bmapVersion = '3.0'} = transform;
    if(!bmapAK) {
      throw new Error('must set bmapAK first');
    }
    
    const callbackName =`_runBmapReady${Date.now()}` ;
    global[callbackName] = function() {
      _resolve(global.BMap);
    };
    
    const {document, location} = global;
    const scriptDom = document.createElement('script');
    scriptDom.setAttribute('type', 'text/javascript');
    scriptDom.setAttribute('src', `${location.protocol}//api.map.baidu.com/api?v=${bmapVersion}&ak=${bmapAK}&callback=${callbackName}`);   
    document.head.appendChild(scriptDom);
  }
});

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
