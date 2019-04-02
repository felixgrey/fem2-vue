/* eslint-disable */

function createMockData(template = {}, config = {}, _state = {}) {
  const {
    listLength = () => 3
  } = config;
  _state.deep = _state.deep || 0;
  let _name = _state._name || '';

  let cloneData;
  if(Array.isArray(template)) {
    cloneData = [];
    if(template.length) {
      let first = template[0];
      let thisLength = listLength(_name);    
      _state.deep++;
      _state.parent = _name;
      _state.iterating = true;
      for(let i = 0; i < thisLength; i++) {
        _state.currentIndex = i;
        cloneData.push(createMockData(first, config, _state));
      }
      _state.iterating = false;
    }
  } else if(typeof template === 'object' && template !== null) {
    cloneData = {};
    if(!_state.iterating){
      _state.deep++;
      _state.parent = _name;
    }
    Object.keys(template).forEach(key => {
      _state._name = key;
      cloneData[key] = createMockData(template[key], config, _state);
    });
  } else if(typeof template === 'string') {
    let isNum = false;
    cloneData = template.replace(/\{\$.+?\}/g, function(a) {
        isNum = false;
        if ("{$index}" === a) {
          return _state.currentIndex || 0;
        }
        
        if ("{$index1}" === a) {
          return (_state.currentIndex || 0) + 1;
        }
        
        if ("{$parent}" === a) {
          return _state.parent === undefined ?  '' : _state.parent;
        }
        
        if ("{$name}" === a) {
          return _name;
        }
        
        let [type, value = ''] = a.replace(/^\{\$|\}$/g,"").split(":");
        if (type === 'date') {
          let _date = new Date(); 
          value = +value || 0;
          _date.setDate(_date.getDate() + value);
          
          let MM =_date.getMonth() + 1;
          MM = MM <10 ? '0' + MM : MM; 
          
          let dd =_date.getDate();
          dd = dd <10 ? '0' +  dd : dd;
          
          let HH =_date.getHours();
          HH = HH <10 ? '0' +  HH : HH;
          
          let mm =_date.getMinutes();
          mm = mm <10 ? '0' +  mm : mm;
          
          let ss =_date.getSeconds();
          ss = ss <10 ? '0' +  ss : ss;
        
          return `${_date.getFullYear()}${MM}${dd} ${HH}:${mm}:${ss}`;
        }

        if(type === 'random') {
          value = +value || 1;       
          let [,dec = 0] = `${value}`.split('.');         
          value = `${Math.random()*10e16}`.substring(0, parseInt(value));
          if(dec) {
            value = value + `.${Math.random()*10e16}`.substring(0, parseInt(dec) + 1);
          }
          isNum = true;
          return value;   
        }
        
        if(type === 'enum') {
          let enumKey = `${_state.deep}:${_name}:${a}`;
          _state[enumKey] = _state[enumKey] || 0;
          value = value.split(',');
          let result = value[_state[enumKey]]
          _state[enumKey] = (_state[enumKey] + 1) % value.length;
          return result;
        }
        
      return a;
    });
    
    if(isNum){
      cloneData = +cloneData;
    }
  } else {
    cloneData = template;
  }

  return cloneData;
}

// 门诊
const outpatientRecordTemplate = {
  // 概要
  medicalRecord: {
    visitNo: "{$random:7}{$index1}", // 就诊流水号 
    hospital: "{$enum:解放军,妇婴,宠物}第{$index1}医院", // 医疗机构名称
    level: "{$enum:1,2,3}", // 医疗机构级别
    kind: "普通门诊", // 医疗类别（普通门诊、定点药店购药、普通住院）
    type: "门诊", // 门诊、住院
    date: "{$date:-1}", // 就诊日期
    icdCode: "{$enum:1,2,3}", // 疾病代码
    icdName: "{$enum:狂犬病,脑残,智障}", // 疾病名称
    drgsCode: "DRGs代码", // DRGs代码
    drgsName: "DRGs名称", // DRGs名称
    mdcCode: "MDC代码", // MDC代码
    mdcName: "MDC名称", // MDC名称
    inHospitalDays: "住院天数", // 住院天数
    department: "就诊科室", // 就诊科室
    doctor: "主治医师", // 主治医师
    medOrgCode: "医疗机构编号", // 医疗机构编号
    regionCode: "210100", // 统筹区编号
    regionName: "沈阳市", // 统筹区名称
    leaveDate: "{$date}", // 出院日期 
    diags: [ // 诊断信息
      {
        icdCode: "Z00.00{$index}",
        icdName: "{$enum:治病,乱投医,没救了}",
        principal: "principal",
        typeName: "typeName",
      }
    ]
  },
  //账单
  bills: [{
    billNo: "{$random:11}{$index}", // 单据号
    siTotalPayment: 1, // 医保合计金额
    totalPayment: 2, // 合计金额
    dimens1: [ // 支付维度1
      {
        name: '{$parent}{$index}',
        money: '{$random:3.2}'
      }
    ],
    total1: '{$random:3.2}', // 支付维度1合计值
    dimens2: [ // 支付维度2
      {
        name: '{$parent}{$index}',
        money: '{$random:3.2}'
      }
    ],
    total2: '{$random:3.2}', // 支付维度2合计值
    categories: [ // 收费类别
      {
        catCode: "项目类别代码", // 项目类别代码
        catName: "项目类别名称", // 项目类别名称
        catPayment: "按项目小计", // 按项目小计
        items: [ // 收费项目
          {
            code: "收费项目代码", // 收费项目代码
            name: "收费项目名称", // 收费项目名称
            spec: "规格", // 规格
            amount: 123, // 数量
            unit: "单位", // 单位
            price: "单价", // 单价
            kind: "收费项目等级", // 收费项目等级
            type: "收费项目种类", // 收费项目种类
            payment: 123, // 金额
            usage: "使用方法", // 使用方法（每次dose dose_unit，freq）
            manufacture: "生产企业名称", // 生产企业名称
            limitPrice: "限价", // 限价
            limitCondition: "限药", // 限药
          }
        ]
      }
    ]
  }]
}

console.log(JSON.stringify(createMockData(outpatientRecordTemplate), null, 2))