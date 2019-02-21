import {echartsColors, EchartsTransformer, transform} from './Utils';
/*
  雷达 饼
 */

export class RpTransformer extends EchartsTransformer {
  _init (param = {}) {
    this._beforeInit(param, {
      defaultType: 'pie',
      name:'rp',
      geomTypes: '^radar$|^pie$',
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

    return super._init(config);
  }
  
  output() {
    const {allColors} = this._beforeOutput();    
    const {enums, list} = super.output();
    const {_nameField, _valueField} = this;  
    const geomType = this._type(null);
    this._checkGeomType(geomType);
    
    return {
      executor:{},
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

