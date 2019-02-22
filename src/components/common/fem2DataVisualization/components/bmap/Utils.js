/* eslint-disable */
import {transform, DataSetTransformer, noValue, mergeConfig, blank} from '../../core';

transform.bmap = {
  districts:{}
};

// 加载百度地图API
let _resolve;
export const bmpApiReady = new Promise((resolve) => {
  _resolve = resolve;
});
let hasSet = false;
Object.defineProperty(transform.bmap, 'bmapAK',{
  set: function(bmapAK) {
    if(hasSet){
      throw new Error('only can set bmapAK once');
    }
    hasSet = true;
    const version = transform.bmap.version || '3.0';
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
    scriptDom.setAttribute('src', `${location.protocol}//api.map.baidu.com/api?v=${version}&ak=${bmapAK}&callback=${callbackName}`);   
    document.head.appendChild(scriptDom);
  }
});

export function addBmapBoundary(bmap, name, opts = {}) {
  if(!bmap || !name || !global.BMap){
    return Promise.resolve(null);
  }
  const {Boundary, Point, Polygon} = global.BMap;
  
  let path = transform.bmap.districts[name];
  if (path) {  
    const points = path.map(([lng, lat]) => new Point(lng, lat));   
    const pg = new Polygon(points, opts);

    bmap.addOverlay(pg);
    return Promise.resolve(pg);
  }
  
  return new Promise((resolve)=>{
    new Boundary().get(name, (result = {}) => {
      if(!result.boundaries || !result.boundaries.length) {
        return ;
      }
      const points = result.boundaries[0].split(';').map(llStr => {
        const [lng, lat] = llStr.split(',');
        return new Point(lng, lat);
      });
      const pg = new Polygon(points, opts);
      bmap.addOverlay(pg);
      resolve(pg);
    });
  });

  
}


