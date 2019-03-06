import 'echarts';
import './ec-bmap/bmap';
//import 'echarts/extension/bmap/bmap';
//import {bmpApiReady} from '../bmap';
import {echartsColors, EchartsTransformer} from './Utils';
import {transform, mergeConfig, blank} from '../../core';

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
    const {allColors} = this._beforeoutput();  
    const {list} = super.output();
    let geomType = this._type(null);
    const {_lngField, _latField, _valueField} = this;
    
    const _$getItem = (seriesIndex, dataIndex) => {
      return list[dataIndex];
    }
    
    const _$getItemColor = (seriesIndex, dataIndex, args)=> {
      const current = allColors[dataIndex % allColors.length];
      return echartsColors(current, list[dataIndex], args)(this._itemColors);
    };
    
    this._bmapConfig.mapOptions = this._mapOptions;
   
    return this._beforeReturn({    
      bmap: this._bmapConfig,
      _$getItem,
      _$getItemColor,
      series: {
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
          },
          normal:{
            color: (...args)=> {
              const {dataIndex} = args[0];
              const current = allColors[dataIndex % allColors.length];
              return echartsColors(current, list[dataIndex], args)(this._itemColors);
            }
          }
        },
        data: list.map(item => [item[_lngField], item[_latField], item[_valueField], item])
      }
    });  
  }
}

transform.echarts.bmapOption = function(param = {}, optionTemplate = {}) {
  return new BmapTransformer(param, optionTemplate).output();
}


