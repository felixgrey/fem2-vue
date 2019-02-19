import {echartsColors} from './Utils';
import {transform, DataSetTransformer, noValue, mergeConfig} from '@/components/fem2';
/*
  折线 条形 区域
 */
function isLba(type){
  return new RegExp('^line$|^bar$|^area$','g').test(type);
}

export class LbaTransformer extends DataSetTransformer {
  _init(param = {}) {  
    const {dataSource, xAxisField, yAxisField, seriesField} = param;

    if(noValue(xAxisField) || noValue(yAxisField)) {
      throw new Error(`Echars(lba) dataset must has xAxisField and yAxisField`);
    }
    
    mergeConfig(this, param, {
      dataSource: [],
      colors: transform.echarts.COLORS,
      smooth: false,
      stack: false,
      itemColors: ':-',
      areaColors: ':-',
      aggregate: transform.AGGREGATES.sum,
      type: 'line'
    });
    
    if (typeof this._type === 'string') {
      const __type = this._type;
      this._type = () => __type;
    }

    const config = {
      dataSource,
      aggregate:{
        [yAxisField]: this._aggregate
      },
      groupFields: [xAxisField, ...(seriesField ? [seriesField] : [])],
      valueFields: [yAxisField]
    };

    super._init(config);  
  }
  
  output() {
    const allColors = this._colors;
    const stack = this._stack ? this._yAxisField : false;
    
    const fields = {};
    this._groupFieldValues.forEach((valueSet, index) => {
      fields[this._groupFields[index]] = Array.from(valueSet) ;
    }); 
    const seriesNames = fields[this._seriesField] || [null];
  
    const _seriesData = Array.from(this._data.keys()).map(key => this._data.get(key));  
    const getSeriesData = this._seriesField ? (name) => {
      return _seriesData.map(dataMap => dataMap.get(name).get(this._yAxisField))
    } : () => {
      return _seriesData.map(dataMap => dataMap.get(this._yAxisField)) 
    };
    
    const series = seriesNames.map((name, index) => { 
      let geomType = this._type(name);
      const current = allColors[index % allColors.length];
      
      if (!isLba(geomType)) {
        throw new Error(`wrong type ${geomType}`);
      }
      
      let isArea = geomType === 'area';
      let areaColor = 'transparent';
      if (isArea) {
        geomType = 'line';
        areaColor = echartsColors(current)(this._areaColors);
      }

      return {
        name,
        itemStyle:{
          color: echartsColors(current)(this._itemColors)
        },
        areaStyle:{
          color: areaColor, 
        },
        stack,
        smooth: this._smooth,
        type: geomType,
        data: getSeriesData(name)
      };
    });
    
    return {
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
  }
}

transform.echarts.lbaOption = function(param = {}) {
  return new LbaTransformer(param).output();
}
