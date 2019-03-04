import {echartsColors, EchartsTransformer} from './Utils';
import {transform, noValue, mergeConfig} from '../../core';
/*
  雷达 饼
 */

export class RpTransformer extends EchartsTransformer {
  _init (param = {}) {
    this._beforeInit(param, {
      defaultType: 'pie',
      name:'rp',
      geomTypes: '^radar$|^pie$',
      mustHas: ['valueField']
    });

    let {dataSource, nameField, valueField, indicatorField, type} = param;
    
    mergeConfig(this, param, {
      maxM: 1,
      nameField: '1'
    });
    
    if(type === 'pie' && noValue(nameField)){
      throw new Error('pie must has nameField');
    }
    
    if(type === 'radar' && noValue(indicatorField)){
      throw new Error('radar must has indicatorField');
    }
    
    const _config = {
      dataSource,
      aggregate: {
        [valueField]: this._aggregate
      },
      groupFields: [this._nameField],
      valueFields: [valueField]
    };
    
    if(type === 'radar'){
      this._maxValueMap = new Map();
      
      _config.aggregate.max = ({value, item, defaultValue}) => {
          const currentValue = value || this._maxValueMap;
          
          let itemValue = noValue(item[valueField]) ? defaultValue : item[valueField];
          let indicatorValue = item[indicatorField];
          
          let maxValue = currentValue.get(indicatorValue);
          if(noValue(maxValue)){
            maxValue = -Infinity;
            currentValue.set(indicatorValue, maxValue);
          }

          if(itemValue >  maxValue){
            currentValue.set(indicatorValue, itemValue);
          }
          
          return currentValue;  
      };
      _config.groupFields.push(indicatorField);
      _config.valueFields.push('max');
    }

    return super._init(this._beforeConfig(_config));
  }
  
  _pieOption(enums, list) {
    const allColors = this._colors;
    const {_nameField, _valueField} = this;  

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

    return {
      _$getItem,
      _$getItemColor,
      legend: {
        data: enums[_nameField]
      },
      series: {
        type: 'pie',
        itemStyle: {
          color: itemColor  
        },
        label: {
          color: itemColor
        },
        data: list.map(item => ({name: item[_nameField], value: item[_valueField]}))
      }
    };
  }
  
  _radarOption(enums, list) {   
    const indicatorNames = Array.from(this._maxValueMap.keys());
    const {_nameField, _indicatorField, _valueField, _defaultValue, _originAs} = this;
    
    const _eachDefaultValue = indicatorNames.map(() => _defaultValue);
    const _map = new Map();

    enums[_nameField].forEach( name => {
      _map.set(name, {
        name,
        value: [].concat(_eachDefaultValue), 
        [_originAs]: []
      });
    });

    list.map(item => {
      const newItem = _map.get(item[_nameField]);

      for(let i = 0; i < indicatorNames.length; i++ ) {
        if (indicatorNames[i] === item[_indicatorField]) {
          newItem.value[i] = item[_valueField];
          break;
        }
      }

      item[_originAs].forEach(o => {
        newItem[_originAs].push(o);
      });
    });
    
    const _list = Array.from(_map.values());
    const _$getItem = (seriesIndex, dataIndex) => _list[dataIndex];
    
    let getMax;
    if (this._uniMax) {
      const _max = Array.from(this._maxValueMap.values()).sort((a,b) => b - a)[0] || _defaultValue;
      getMax = () => _max;
    } else {
      getMax = (name) => {
        return this._maxValueMap.get(name)
      }
    }

    return {
      _$getItem,
      legend: {
        data: Array.from(_map.keys())
      },
      radar: {
        indicator: indicatorNames.map(name => {     
          return {name, max: getMax(name) * this._maxM};
        })
      },
      series: {
        type: 'radar',
        data: _list
      }
    };
  }
  
  output() { 
    const {enums, list} = super.output();
    const geomType = this._type(null);

    let _option = geomType === 'pie' ? this._pieOption(enums, list) : this._radarOption(enums, list);
    return this._beforeReturn(_option);
  }
}

transform.echarts.rpOption = function(param = {}, optionTemplate = {}) {
  return new RpTransformer(param, optionTemplate).output();
}

