import echarts,{getInstanceByDom} from 'echarts';
import {transform, DataSetTransformer,  noValue} from '@/components/fem2/core/Data';
export * from '@/components/fem2/core/Data';

export const blank = () => {};

const femOptionExecutorData = {
  clear: function(flag, echart) {
    const option = echart.getOption();
    option.executor.forEach(executor => executor.clear = false);
    if(flag){
      setTimeout(()=>{
         echart.clear();
         echart.setOption(option);
      })
    } 
  }
};

//const gradientColor = ['#f6efa6', '#d88273', '#bf444c'];
transform.echarts = {
  COLORS: [
   '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
   '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
  ],
  optionExecutor: (name, fun = blank) => {
    femOptionExecutorData[name] = fun;
  }
};

echarts.extendComponentModel({
  type: 'executor',
  defaultOption:{}
});

echarts.extendComponentView({
  type:'executor',
  render: function(executorModel, ecModel, api) {   
    const option = executorModel.option || {};    
    const echart = getInstanceByDom(api.getDom())
    for(let name in option){
      const exec = femOptionExecutorData[name] || blank;
      exec(option[name], echart, {
        option,
        executorModel,
        ecModel,
        api
      });
    }
  }
});

let _resolve;
export const bmpApiReady = new Promise((resolve) => {
  _resolve = resolve;
});

Object.defineProperty(transform, 'bmapAK',{
  set:function(bmapAK) {
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

export function echartsColors(current  = 'rgba(0,0,0,1)', param = {}) {
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
      return colorPattern(current, param, echarts);
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

export class EchartsTransformer extends DataSetTransformer {
  _checkGeomType(geomType) {
    return new RegExp(geomType,'g').test(this._geomTypes);
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




