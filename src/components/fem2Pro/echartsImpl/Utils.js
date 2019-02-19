import echarts from 'echarts';
import {transform} from '@/components/fem2';

transform.echarts = {
  COLORS: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
};

export function echartsColors(current  = 'rgba(0,0,0,1)') {
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
      return colorPattern(current, echarts);
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