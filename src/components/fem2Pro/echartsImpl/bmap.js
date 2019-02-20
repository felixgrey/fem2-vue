import echarts from 'echarts'; // 不同人可能用不同的echarts包，全都载入
import echarts2 from 'echarts/lib/echarts'
import 'echarts/extension/bmap/bmap';
import {echartsColors, EchartsTransformer, transform, noValue, mergeConfig, bmpReady} from './Utils';
/*
  百度地图
 */

// 地图全局配置
transform.bmapConfig = transform.bmapConfig || {};
transform.bmapDeclaredArea = transform.bmapDeclaredArea || {};

const blank = () => {};

function _$femOnSetOption(opts) {
  if(!opts) {
    return;
  }
  setTimeout(() => {
       
    const {$afterSetOption = blank, $afterBmapReady = blank} = opts;
    $afterSetOption(opts, this);
    bmpReady.then(() => {
      const bmap = this.getModel().getComponent('bmap').getBMap();
      $afterBmapReady(bmap, this);
    });    
  }); 
}

function proxyEcharts(_echarts){
  if (_echarts._$hasAddFemOnSetOption) {
    return;
  }
  _echarts._$hasAddFemOnSetOption = true;
  
  // 用echarts对象间接获取原型
  const blankEchart = _echarts.init(document.createElement('div'));
  const echartPrototype = blankEchart.__proto__.constructor.prototype; 
  echartPrototype._$femOnSetOption = _$femOnSetOption;
  
  // 代理charts.init；
  const oldInit = _echarts.init;
  _echarts.init = function(dom, theme, opts) {
    const chart = oldInit.bind(this)(dom, theme, opts);
    chart._$femOnSetOption(opts);
    return chart;
  }
  
  // 代理echarts原型setOption
  const oldSetOption = echartPrototype.setOption;
  echartPrototype.setOption = function(option, notMerge, lazyUpdate) {
    const result = oldSetOption.bind(this)(option, notMerge, lazyUpdate);
    this._$femOnSetOption(option);
    return result;
  }
}

// 不论哪个包里的，都代理就对啦
proxyEcharts(echarts);
proxyEcharts(echarts2);

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
      $afterBmapReady:(bmap, chart) => {
        console.log(bmap, chart);
      },
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
  if(!global.BMap) {
    throw new Error('BMap has not loaded please use bmpReady.then((BMap) => {[your code]})');
  }
  return new BmapTransformer(param).output();
}


