import echarts from 'echarts';
import 'echarts-wordcloud';
import 'echarts-liquidfill';
import {transform, DataSetTransformer, noValue} from '@/components/fem2';

transform.echarts = {
  COLORS: [
    "#26cdd8", '#3786ff', "#eec800", '#f5626f', '#9879ee', 
    "#c23531", '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
    '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
  ]
};

function echartsColors(colorPattern, extend = {}) {
  
  if (!colorPattern) {
    return 'transparent';
  }
  
  if(typeof colorPattern === 'object'){
    extend = Object.assign(extend, colorPattern);
    colorPattern = colorPattern.colorPattern;
  }
  
  const {
    current = 'rgba(0,0,0,1)',
    a = 0,
    b = 0,
    c = 0,
    d = 1,
    e = 0,
    f = 1
  } = extend;

  

  let [type, colors] = colorPattern.split(':'); // line radial

  if (colors === undefined) {
    colors = type;
    type = 'line'
  }

  let [from, to] = colors.split('-');

  if(!from) {
    from = current;
  }

  if(!to) {
    to = current;
  }

  if (from === to) {
    return from;
  }

  if (type === 'line') {
      return new echarts.graphic.LinearGradient(a, b, c, d, [{
          offset: e,
          color: from
      }, {
          offset: f,
          color: to
      }]);
  }

  return  current;
}

export class LbaTransformer extends DataSetTransformer {
  _init(param = {}){
    const {
      colors = transform.echarts.COLORS,
      dataSource = [],
      xAxisField,
      yAxisField,
      seriesField,
      aggregate,
      smooth = false,
      stack = false,
      itemColors = ':-',
      areaColors = ':-',
      type = () => 'line'
    } = param;
    
    if(noValue(xAxisField) || noValue(yAxisField)) {
      throw new Error(`Echars dataset must has xAxisField and yAxisField`);
    }
    
    Object.assign(this, {
      _colors: colors,
      _dataSource: dataSource,
      _xAxisField: xAxisField,
      _yAxisField: yAxisField,
      _seriesField: seriesField,
      _aggregate: aggregate,
      _smooth: smooth,
      _stack: stack,
      _itemColors: itemColors,
      _areaColors: areaColors,
      _type: (typeof type === 'string') ? () => type : type
    });
    
    const config = {
      dataSource,
      aggregate:{
        yAxisField: aggregate
      },
      groupFields: [xAxisField, ...(seriesField ? [seriesField] : [])],
      valueFields: [yAxisField]
    };

    super._init(config);  
  }
  
  output() {
    const allColors = this._colors;
    const fields = {};
    this._groupFieldValues.forEach((valueSet, index) => {
      fields[this._groupFields[index]] = Array.from(valueSet) ;
    }); 
    const seriesNames = fields[this._seriesField] || [];

    let seriesData = Array.from(this._data.keys()).map(key => this._data.get(key));
    let series;
    if (!this._seriesField) {
      const geomType = this._type(null);
      const isArea = geomType === 'area' ;
      const colorOption = {
        current: allColors[0]
      };
      
      series = [{
        type: isArea ? 'line' : geomType,
        itemStyle:{
          color: echartsColors(this._itemColors, colorOption)
        },
        areaStyle:{
          color: isArea ? echartsColors(this._areaColors, colorOption) : 'transparent'
        },
        smooth: this._smooth,
        data: seriesData.map(dataMap => dataMap.get(this._yAxisField))   
      }]
    } else {
      series = seriesNames.map((name, index) => { 
        const geomType = this._type(name);
        const isArea = geomType === 'area';
        const colorOption = {
          current: allColors[index % allColors.length]
        };

        return {
          name,
          itemStyle:{
            color: echartsColors(this._itemColors, colorOption)
          },
          areaStyle:{
            color: isArea ? echartsColors(this._areaColors, colorOption) : 'transparent'
          },
          stack: this._stack ? this._yAxisField : false,
          smooth: this._smooth,
          type: isArea ? 'line' : geomType,
          data: seriesData.map(dataMap => dataMap.get(name).get(this._yAxisField))
        };
      });
    }
    
    const echartsOption = {
      color: this._colors,
      legend:{
        data: seriesNames
      },
      xAxis:{
        type: 'category',
        data: fields[this._xAxisField]
      },
      yAxis: {
        type: 'value'
      },
      series
    };
    
    return echartsOption;
  }
}

transform.echarts.lbaOption = function(param = {}) {
  return new LbaTransformer(param).output();
}

