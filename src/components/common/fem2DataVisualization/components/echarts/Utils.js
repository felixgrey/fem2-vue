import echarts, {getInstanceByDom} from 'echarts';
import 'echarts/extension/bmap/bmap';
//import echarts from 'echarts/lib/echarts';
import {transform, DataSetTransformer, noValue, mergeConfig, blank} from '../../core';

const _optionExecutorData = {
  clear: function(flag, echart) {
    const option = echart.getOption();
    option.executor.forEach(executor => executor.clear = false);
    if(flag){
      setTimeout(()=>{
         echart.clear();
         echart.setOption(option);
      })
    } 
  },
  onEChartReady: function(onEChartReady, echart, {executorModel}) {
    if(executorModel._hasRunOnEChartReady){
      return;
    }
    executorModel._hasRunOnEChartReady = true;
    onEChartReady(echart);
  },
  onClickItem: function(onClickItem, echart, {executorModel}) {
    if(executorModel._hasRunOnClickItem) {
      return;
    }
    executorModel._hasRunOnClickItem = true;
    echart.on('click', (...args) => {
      const {seriesIndex, dataIndex} = args[0];
      let item = {};
      if(echart.getOption()._$getItem){
        item = echart.getOption()._$getItem(seriesIndex, dataIndex);
      }
      onClickItem(item, args)
    })
},
};


transform.echarts = {
  COLORS: [
   '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
   '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
  ],
  optionExecutor: (name, fun = blank) => {
    _optionExecutorData[name] = fun;
  }
}


echarts.extendComponentModel({
  type: 'executor',
  defaultOption:{}
});

echarts.extendComponentView({
  type:'executor',
  render: function(executorModel, ecModel, api) {   
    const option = executorModel.option || {};    
    const echart = getInstanceByDom(api.getDom());
   
    for(let name in option){
      const exec = _optionExecutorData[name] || blank;
      exec(option[name], echart, {
        option,
        executorModel,
        ecModel,
        api
      });
    }
  }
});

export function echartsColors(current  = 'rgba(0,0,0,1)', item = null, args = []) {
  return function (colorPattern, extend = {}) {
    if (!colorPattern) {
      return 'transparent';
    }

    const {
      x = 0,
      y = 0,
      x2 = 0,
      y2 = 1,
      r = 1,
      offsetfrom = 0,
      offsetTo = 1
    } = extend;
  
    if (typeof colorPattern === 'function') {
      return colorPattern(item, current, args);
    } else if (Array.isArray(colorPattern)) {    
      extend = colorPattern[1];
      colorPattern = colorPattern[0];
    }
  
    let [type, colors] = colorPattern.split(':'); // line radial
  
    if (colors === undefined) {
      colors = type;
      type = 'line';
    }
  
    let [from, to] = colors.split('-');    
    from = !from ? current : from;
    to = !to ? current : to;
  
    if (from === to) {
      return from;
    }

    if (type === 'line') {
      return new echarts.graphic.LinearGradient(x, y, x2, y2, [{
          offset: offsetfrom,
          color: from
      }, {
          offset: offsetTo,
          color: to
      }]);
    }
    
    if(type === 'radial') {
      return new echarts.graphic.RadialGradient(x, y, r, [{
          offset: offsetfrom,
          color: from
      }, {
          offset: offsetTo,
          color: to
      }]);
    }
  
    return  current;
  };  
}

export function originItem({value, item}) {
  value = value || [];
  value.push(item);
  return value;
}

export class EchartsTransformer extends DataSetTransformer {
  
  constructor(config = {}, optionTemplate = {}) {
    super(config);
    this._optionTemplate = optionTemplate;
  }
  
  _checkGeomType(geomType) {
    return new RegExp(geomType, 'g').test(this._geomTypes);
  }
  
  _beforeConfig(_config){
    const config = Object.assign({
        aggregate: {},
        valueFields: []
      }, this._optionTemplate, _config);

    let originName = this._originAs;
    if (originName !== false) {
      originName = noValue(originName) ? '_item': originName;
      config.aggregate[originName] = originItem;
      config.valueFields.push(originName);
    }

    return config;
  }
  
  _beforeInit(param = {}, {defaultType, mustHas = [] , name = '', geomTypes = ''}) {
    
    if(noValue(param.dataSource)){
      throw new Error(`Echars(${name}) config must has dataSource`);
    }
    
    mustHas.forEach(field => {
      if (noValue(param[field])) {
        throw new Error(`Echars(${name}) config must has ${mustHas.join(',')} fields`);
      }   
    });

    mergeConfig(this, param, {
      colors: transform.echarts.COLORS,
      itemColors: ':-',
      aggregate: transform.AGGREGATES.sum,
      geomTypes,
      executor: {},
      type: defaultType
    });

    if (typeof this._type === 'string') {
      const __type = this._type;
      this._type = () => __type;
    }   
  }
  
  _beforeOutput() {
    const allColors = this._colors;
    const fields = {};
    this._groupFieldValues.forEach((valueSet, index) => {
      fields[this._groupFields[index]] = Array.from(valueSet) ;
    });
    
    return {
      fields,
      allColors
    };
  }

}




