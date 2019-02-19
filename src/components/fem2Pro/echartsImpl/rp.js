/* eslint-disable */
import {echartsColors, EchartsTransformer} from './Utils';
import {transform, noValue, mergeConfig} from '@/components/fem2';
/*
  雷达 饼
 */
function isRp(type) {
  return new RegExp('^radar$|^pie$','g').test(type);
}

export class RpTransformer extends EchartsTransformer {
  _init (param = {}) {
    this._beforeInit(param, {
      defaultType: 'pie',
      name:'rp',
      mustHas: ['nameField', 'valueField']
    });
    
    const {dataSource, nameField, valueField} = param;
    
    const config = {
      dataSource,
      aggregate: {
        [valueField]: this._aggregate
      },
      groupFields: [nameField],
      valueFields: [valueField]
    };

    super._init(config);
  }
  
  output() {
    const {fields, allColors} = this._beforeOutput();    
    const {enums, list} = super.output();
    const {_nameField, _valueField} = this;
    
    let geomType = this._type(null);
    if (!isRp(geomType)) {
      throw new Error(`wrong type ${geomType}`);
    }
    
    return {
      color: this._colors,
      legend:{
        data: enums[_nameField]
      },
      series:[{
        type: geomType,
        itemStyle:{
          color: (param)=> {
            const {dataIndex} = param;
            const current = allColors[dataIndex % allColors.length];
            return echartsColors(current, param)(this._itemColors);
          }  
        },
        data: list.map(item => ({name: item[_nameField], value:item[_valueField]}))
      }]
    };  
  }
  
}

transform.echarts.rpOption = function(param = {}) {
  return new RpTransformer(param).output();
}

