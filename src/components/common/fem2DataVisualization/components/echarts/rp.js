import {echartsColors, EchartsTransformer} from './Utils';
import {transform} from '../../core';
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
    
    const config = this._beforeConfig({
      dataSource,
      aggregate: {
        [valueField]: this._aggregate
      },
      groupFields: [nameField],
      valueFields: [valueField]
    });

    return super._init(config);
  }
  
  output() {
    const {allColors} = this._beforeOutput();    
    const {enums, list} = super.output();
    const {_nameField, _valueField} = this;  
    const geomType = this._type(null);
    this._checkGeomType(geomType);
    
    const _$getItem = (seriesIndex, dataIndex) => {
      return list[dataIndex];
    }
    
    const _$getItemColor = (seriesIndex, dataIndex, args)=> {
      const current = allColors[dataIndex % allColors.length];
      return echartsColors(current, list[dataIndex], args)(this._itemColors);
    };
    
    const itemColor = (...args) => {
      const {seriesIndex, dataIndex} = args[0];
      return _$getItemColor(seriesIndex, dataIndex, args);
    };   
    
    return this._beforeReturn({
      executor: this._executor,
      _$getItem,
      _$getItemColor,
      color: this._colors,
      legend:{
        data: enums[_nameField]
      },
      series:[{
        type: geomType,
        itemStyle:{
          color: itemColor  
        },
        label: {
          color: itemColor
        },
        data: list.map(item => ({name: item[_nameField], value:item[_valueField]}))
      }]
    });  
  }
}

transform.echarts.rpOption = function(param = {}, optionTemplate = {}) {
  return new RpTransformer(param, optionTemplate).output();
}

