import 'echarts/extension/bmap/bmap';
import {bmpApiReady} from '../bmap';
import {echartsColors, EchartsTransformer, transform, mergeConfig, blank} from './Utils';

/*
  百度地图
 */
transform.echarts.optionExecutor('onBmapReady', function(onBmapReady, echart,{executorModel}) {
  if(executorModel._hasRunOnBmapReady){
    return;
  }
  executorModel._hasRunOnBmapReady = true;
  let bmapComponent = echart.getModel().getComponent('bmap');
  if(!bmapComponent){
    onBmapReady(null);
  } else {
    onBmapReady(bmapComponent.getBMap(), echart);
  }
});

let _nextMapOptions = {};
transform.echarts.nextMapOptions = function(opt = {}){
  _nextMapOptions = opt;
}

bmpApiReady.then(() => {
  const _Map = global.BMap.Map;
  global.BMap.Map = function (dom, opts){
    if(dom && dom.className === 'ec-extension-bmap' && !opts){
      opts = _nextMapOptions;
      _nextMapOptions = {};
    }
    return new _Map(dom, opts);
  }
})

export class BmapTransformer extends EchartsTransformer {
  _init (param = {}) {
    this._beforeInit(param, {
      defaultType: 'scatter',
      name:'bmap',
      geomTypes: '^scatter$|^heat$|^effectScatter$',
      mustHas: ['lngField', 'latField', 'valueField']
    });
    
    const {dataSource, lngField, latField, valueField, bmapConfig = {}} = param;
    
    mergeConfig(this, param, {
      middleLayer: null,
      symbolSize: 10,
      mapColor: null,
      onMapInit: blank,
      afterSetOption: blank,
      bmapConfig: Object.assign(bmapConfig, transform.bmap.bmapConfig)
    });
    
    if(typeof this._symbolSize === 'number') {
      const __symbolSize = this._symbolSize;
      this._symbolSize = () => __symbolSize;
    }
    
    const config = this._beforeConfig({
      dataSource,
      aggregate:{
        [valueField]: this._aggregate
      },
      groupFields: [lngField, latField],
      valueFields: [valueField]
    });

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
      _$getItem,
      executor: this._executor,
      series:[{
        coordinateSystem: 'bmap',
        type: geomType,
        symbolSize:(...args) => {
          const item = args[0][3];
          return this._symbolSize(item, args);
        },
        itemStyle:{
          color: (...args)=> {
            const {dataIndex} = args[0];
            const current = allColors[dataIndex % allColors.length];
            return echartsColors(current, list[dataIndex], args)(this._itemColors);
          }  
        },
        data: list.map(item => [item[_lngField], item[_latField], item[_valueField], item])
      }]
    };  
  }
}

transform.echarts.bmapOption = function(param = {}, optionTemplate = {}) {
  return new BmapTransformer(param, optionTemplate).output();
}


