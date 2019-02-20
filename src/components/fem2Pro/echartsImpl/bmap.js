import 'echarts/extension/bmap/bmap';
import {echartsColors, EchartsTransformer, transform, noValue, mergeConfig, bmpReady} from './Utils';
/*
  百度地图
 */

// 地图全局配置
transform.bmapConfig = transform.bmapConfig || {};
transform.bmapDeclaredArea = transform.bmapDeclaredArea || {};

const blank = () => {};

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
    const {fields, allColors} = this._beforeOutput();  
    const {enums, list} = super.output();
    let geomType = this._type(null);
    this._checkGeomType(geomType);
    const {_lngField, _latField, _valueField} = this;
    
    return {    
      bmap: this._bmapConfig,
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


