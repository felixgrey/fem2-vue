import 'echarts/extension/bmap/bmap';
import {echartsColors, EchartsTransformer, transform, mergeConfig, blank} from './Utils';
/*
  百度地图
 */

// 地图全局配置
(() => {
  const echarts = transform.echarts;
  
  echarts.bmapConfig = echarts.bmapConfig || {};
  echarts.bmapDeclaredArea = echarts.bmapDeclaredArea || {};
  
  echarts.optionExecutor('onBmapReady', function(onBmapReady, api,{executorModel}) {
    if(executorModel._hasRunOnBmapReady){
      return;
    }
    executorModel._hasRunOnBmapReady = true;
    let bmapComponent = api.getModel().getComponent('bmap');
    if(!bmapComponent){
      onBmapReady(false);
    } else {
      onBmapReady(bmapComponent.getBMap());
    }
  });
  
})();

export function addBmapBoundary(bmap, name, opts = {}) {
  if(!bmap || !name || !global.BMap){
    return;
  }
  const {Boundary, Point, Polygon} = global.BMap;
  var bdary = new Boundary();
  bdary.get(name, (result = {}) => {
    if(!result.boundaries || !result.boundaries.length) {
      return ;
    }
    const points = result.boundaries[0].split(';').map(llStr => {
      const [lng,lat] = llStr.split(',');
      return new Point(lng,lat);
    });
    bmap.addOverlay(new Polygon(points),opts);
  });
}

export class BmapTransformer extends EchartsTransformer {
  _init (param = {}) {
    this._beforeInit(param, {
      defaultType: 'scatter',
      name:'bmap',
      geomTypes: '^scatter$|^heat$',
      mustHas: ['lngField', 'latField', 'valueField']
    });
    
    const {dataSource, lngField, latField, valueField, bmapConfig = {}} = param;
    
    mergeConfig(this, param, {
      middleLayer: null,
      mapSize: null,
      mapColor: null,
      onMapInit: blank,
      afterSetOption: blank,
      bmapConfig: Object.assign(bmapConfig, transform.bmapConfig)
    });
    
    const config = {
      dataSource,
      aggregate:{
        [valueField]: this._aggregate
      },
      groupFields: [lngField, latField],
      valueFields: [valueField]
    };

    return super._init(config);
  }
  
  output() {
    const {allColors} = this._beforeOutput();  
    const {list} = super.output();
    let geomType = this._type(null);
    this._checkGeomType(geomType);
    const {_lngField, _latField, _valueField} = this;
    
    return {    
      bmap: this._bmapConfig,
      executor:{},
      series:[{
        coordinateSystem: 'bmap',
        type: geomType,
        itemStyle:{
          color: (param)=> {
            const {dataIndex} = param;
            const current = allColors[dataIndex % allColors.length];
            return echartsColors(current, param)(this._itemColors);
          }  
        },
        data: list.map(item => [item[_lngField], item[_latField], item[_valueField], item])
      }]
    };  
  }
}

transform.echarts.bmapOption = function(param = {}) {
  return new BmapTransformer(param).output();
}


