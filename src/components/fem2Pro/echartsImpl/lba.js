import {echartsColors, EchartsTransformer} from './Utils';
import {transform, mergeConfig} from '@/components/fem2';
/*
  折线 条形 区域
 */
function isLba(type){
  return new RegExp('^line$|^bar$|^area$','g').test(type);
}

export class LbaTransformer extends EchartsTransformer {
  _init(param = {}) { 
    this._beforeInit(param, {
      defaultType: 'line',
      name: 'lba',
      mustHas: ['xAxisField', 'yAxisField']
    });
    
    const {dataSource, xAxisField, yAxisField, seriesField} = param;

    mergeConfig(this, param, {
      smooth: false,
      stack: false,
      areaColors: ':-'
    });

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
    const {fields, allColors} = this._beforeOutput();
    const stack = this._stack ? this._yAxisField : false;
    const seriesNames = fields[this._seriesField] || [null];
  
    const _seriesData = Array.from(this._data.keys()).map(key => this._data.get(key));  
    const getSeriesData = this._seriesField ? (name) => {
      return _seriesData.map(dataMap => dataMap.get(name).get(this._yAxisField))
    } : () => {
      return _seriesData.map(dataMap => dataMap.get(this._yAxisField)) 
    };
    
    const series = seriesNames.map((name, index) => {  
      const current = allColors[index % allColors.length];

      let geomType = this._type(name);
      if (!isLba(geomType)) {
        throw new Error(`wrong type ${geomType}`);
      }
      
      let isArea = geomType === 'area';
      let areaColor = 'transparent';
      if (isArea) {
        geomType = 'line';
        areaColor = (param) => {
          return echartsColors(current, param)(this._areaColors)
        }
      }

      return {
        name,
        itemStyle:{
          color: (param) => {
            return echartsColors(current, param)(this._itemColors)
          }    
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
      color: allColors,
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
