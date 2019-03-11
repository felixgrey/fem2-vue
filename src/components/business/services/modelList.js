/*  自动生成的文件,勿动  */

export default {
  "CityInfo": {
    "type": "object",
    "properties": {
      "cityCode": {
        "type": "string",
        "description": "城市编码",
        "allowEmptyValue": false
      },
      "cityName": {
        "type": "string",
        "description": "城市名称",
        "allowEmptyValue": false
      }
    },
    "title": "CityInfo"
  },
  "DoctorBaseInfo": {
    "type": "object",
    "properties": {
      "areaId": {
        "type": "string"
      },
      "contactPerson": {
        "type": "string",
        "description": "联系人",
        "allowEmptyValue": false
      },
      "contactPhone": {
        "type": "string",
        "description": "联系电话",
        "allowEmptyValue": false
      },
      "deptName": {
        "type": "string",
        "description": "所在科室",
        "allowEmptyValue": false
      },
      "hosId": {
        "type": "string",
        "description": "所在医院ID",
        "allowEmptyValue": false
      },
      "hosName": {
        "type": "string",
        "description": "所在医院名称",
        "allowEmptyValue": false
      },
      "idCode": {
        "type": "string",
        "description": "身份证",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "姓名",
        "allowEmptyValue": false
      },
      "phone": {
        "type": "string",
        "description": "电话",
        "allowEmptyValue": false
      },
      "riskLabel": {
        "type": "string",
        "description": "风险标签",
        "allowEmptyValue": false
      },
      "riskScore": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数",
        "allowEmptyValue": false
      }
    },
    "title": "DoctorBaseInfo"
  },
  "DoctorHighRiskCount": {
    "type": "object",
    "properties": {
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "违规数量",
        "allowEmptyValue": false
      }
    },
    "title": "DoctorHighRiskCount"
  },
  "DoctorHighRiskDistribution": {
    "type": "object",
    "properties": {
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "违规数量",
        "allowEmptyValue": false
      }
    },
    "title": "DoctorHighRiskDistribution"
  },
  "DoctorHighRiskHospital": {
    "type": "object",
    "properties": {
      "doctorHighRiskDistributionList": {
        "type": "array",
        "description": "风险行为",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/DoctorHighRiskDistribution"
        }
      },
      "hospitalLevelCode": {
        "type": "string",
        "description": "医院等级编码",
        "allowEmptyValue": false
      },
      "hospitalLevelName": {
        "type": "string",
        "description": "医院等级名称",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "违规数量",
        "allowEmptyValue": false
      }
    },
    "title": "DoctorHighRiskHospital"
  },
  "DoctorHighRiskInfo": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "format": "double",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "department": {
        "type": "string",
        "description": "科室",
        "allowEmptyValue": false
      },
      "hospital": {
        "type": "string",
        "description": "医院",
        "allowEmptyValue": false
      },
      "idNo": {
        "type": "string",
        "description": "身份证号",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "姓名",
        "allowEmptyValue": false
      },
      "phone": {
        "type": "string",
        "description": "手机号",
        "allowEmptyValue": false
      },
      "riskScore": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数",
        "allowEmptyValue": false
      },
      "riskScoreTrend": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数趋势,0-不变；1-下降；2-上升",
        "allowEmptyValue": false
      },
      "violationDetail": {
        "type": "string",
        "description": "主要违规信息",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "违规数量",
        "allowEmptyValue": false
      }
    },
    "title": "DoctorHighRiskInfo"
  },
  "DoctorHighRiskMonitorInfo": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "format": "double",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "ruleCode": {
        "type": "string",
        "description": "行为疑点编码",
        "allowEmptyValue": false
      },
      "ruleName": {
        "type": "string",
        "description": "行为疑点名称",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      }
    },
    "title": "DoctorHighRiskMonitorInfo"
  },
  "DoctorRiskScore": {
    "type": "object",
    "properties": {
      "riskScore": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      }
    },
    "title": "DoctorRiskScore"
  },
  "DrugsTop10": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "药品编码",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "药品名称",
        "allowEmptyValue": false
      }
    },
    "title": "DrugsTop10"
  },
  "HospitalBaseInfo": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "地址",
        "allowEmptyValue": false
      },
      "bedNumber": {
        "type": "integer",
        "format": "int32",
        "description": "床位数",
        "allowEmptyValue": false
      },
      "code": {
        "type": "string",
        "description": "医院编码",
        "allowEmptyValue": false
      },
      "contact": {
        "type": "string",
        "description": "联系人",
        "allowEmptyValue": false
      },
      "contactPhone": {
        "type": "string",
        "description": "联系电话",
        "allowEmptyValue": false
      },
      "latitude": {
        "type": "string",
        "description": "纬度",
        "allowEmptyValue": false
      },
      "levelCode": {
        "type": "string",
        "description": "医院等级编码",
        "allowEmptyValue": false
      },
      "levelName": {
        "type": "string",
        "description": "医院等级名称",
        "allowEmptyValue": false
      },
      "longitude": {
        "type": "string",
        "description": "经度",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "医院名称",
        "allowEmptyValue": false
      },
      "riskLabel": {
        "type": "string",
        "description": "风险标签",
        "allowEmptyValue": false
      },
      "riskScore": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数",
        "allowEmptyValue": false
      },
      "siContact": {
        "type": "string",
        "description": "医保联系人",
        "allowEmptyValue": false
      },
      "siContactPhone": {
        "type": "string",
        "description": "联系电话",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalBaseInfo"
  },
  "HospitalHighAreaMap": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "医院地址",
        "allowEmptyValue": false
      },
      "code": {
        "type": "string",
        "description": "医院编码",
        "allowEmptyValue": false
      },
      "latitude": {
        "type": "string",
        "description": "纬度",
        "allowEmptyValue": false
      },
      "levelCode": {
        "type": "string",
        "description": "医院等级编码",
        "allowEmptyValue": false
      },
      "levelName": {
        "type": "string",
        "description": "医院等级名称",
        "allowEmptyValue": false
      },
      "longitude": {
        "type": "string",
        "description": "经度",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "医院名称",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalHighAreaMap"
  },
  "HospitalHighList": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "医院编码",
        "allowEmptyValue": false
      },
      "hospitalRiskTypeList": {
        "type": "array",
        "description": "涉及风险类型",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/HospitalRiskScan"
        }
      },
      "id": {
        "type": "string",
        "description": "医院ID",
        "allowEmptyValue": false
      },
      "levelCode": {
        "type": "string",
        "description": "医院等级编码",
        "allowEmptyValue": false
      },
      "levelName": {
        "type": "string",
        "description": "医院等级名称",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "医院名称",
        "allowEmptyValue": false
      },
      "riskCount": {
        "type": "integer",
        "format": "int32",
        "description": "风险数量",
        "allowEmptyValue": false
      },
      "riskScore": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数",
        "allowEmptyValue": false
      },
      "riskScoreTrend": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数趋势,0-不变；1-下降；2-上升",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalHighList"
  },
  "HospitalHighTrend": {
    "type": "object",
    "properties": {
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "数量",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalHighTrend"
  },
  "HospitalHospitalization": {
    "type": "object",
    "properties": {
      "age": {
        "type": "string",
        "description": "年龄",
        "allowEmptyValue": false
      },
      "contactPhone": {
        "type": "string",
        "description": "联系电话",
        "allowEmptyValue": false
      },
      "day": {
        "type": "integer",
        "format": "int32",
        "description": "入院/在院天数",
        "allowEmptyValue": false
      },
      "deptName": {
        "type": "string",
        "description": "所在科室",
        "allowEmptyValue": false
      },
      "diagnosisICD": {
        "type": "string",
        "description": "诊断ICD",
        "allowEmptyValue": false
      },
      "diagnosisName": {
        "type": "string",
        "description": "诊断名称",
        "allowEmptyValue": false
      },
      "doctorName": {
        "type": "string",
        "description": "涉及医生",
        "allowEmptyValue": false
      },
      "eventName": {
        "type": "array",
        "description": "事件名称",
        "allowEmptyValue": false,
        "items": {
          "type": "string"
        }
      },
      "idCode": {
        "type": "string",
        "description": "身份证",
        "allowEmptyValue": false
      },
      "inTime": {
        "type": "string",
        "description": "入院时间",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "姓名",
        "allowEmptyValue": false
      },
      "outTime": {
        "type": "string",
        "description": "出院时间",
        "allowEmptyValue": false
      },
      "personNo": {
        "type": "string",
        "description": "个人医保编号",
        "allowEmptyValue": false
      },
      "pubMoney": {
        "type": "number",
        "description": "涉及统筹金额",
        "allowEmptyValue": false
      },
      "riskNum": {
        "type": "integer",
        "format": "int32",
        "description": "风险点数量",
        "allowEmptyValue": false
      },
      "sex": {
        "type": "string",
        "description": "性别",
        "allowEmptyValue": false
      },
      "title": {
        "type": "string",
        "description": "提示",
        "allowEmptyValue": false
      },
      "totalMoney": {
        "type": "number",
        "description": "涉及金额",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalHospitalization"
  },
  "HospitalInAgeDistribution": {
    "type": "object",
    "properties": {
      "age": {
        "type": "string",
        "description": "年龄",
        "allowEmptyValue": false
      },
      "ageRange": {
        "type": "string",
        "description": "年龄范围",
        "allowEmptyValue": false
      },
      "code": {
        "type": "integer",
        "format": "int32",
        "description": "类型编码 1全市平均，2本院",
        "allowEmptyValue": false
      },
      "maxAge": {
        "type": "integer",
        "format": "int32",
        "description": "最大年龄",
        "allowEmptyValue": false
      },
      "minAge": {
        "type": "integer",
        "format": "int32",
        "description": "最小年龄",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "类型名称",
        "allowEmptyValue": false
      },
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "值",
        "allowEmptyValue": false
      },
      "orgCode": {
        "type": "string",
        "description": "医疗机构编码",
        "allowEmptyValue": false
      },
      "personCount": {
        "type": "integer",
        "format": "int32",
        "description": "人次数",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalInAgeDistribution"
  },
  "HospitalInOutTimeDistribution": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int32",
        "description": "类型编码 1基础值，2同级市均，3本院",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "类型名称",
        "allowEmptyValue": false
      },
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "值",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalInOutTimeDistribution"
  },
  "HospitalOutpatient": {
    "type": "object",
    "properties": {
      "age": {
        "type": "string",
        "description": "年龄",
        "allowEmptyValue": false
      },
      "contactPhone": {
        "type": "string",
        "description": "联系电话",
        "allowEmptyValue": false
      },
      "deptName": {
        "type": "string",
        "description": "所在科室",
        "allowEmptyValue": false
      },
      "diagnosisICD": {
        "type": "string",
        "description": "诊断ICD",
        "allowEmptyValue": false
      },
      "diagnosisName": {
        "type": "string",
        "description": "诊断名称",
        "allowEmptyValue": false
      },
      "doctorName": {
        "type": "string",
        "description": "涉及医生",
        "allowEmptyValue": false
      },
      "eventName": {
        "type": "string",
        "description": "事件名称",
        "allowEmptyValue": false
      },
      "idCode": {
        "type": "string",
        "description": "身份证",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "姓名",
        "allowEmptyValue": false
      },
      "personNo": {
        "type": "string",
        "description": "个人医保编号",
        "allowEmptyValue": false
      },
      "pubMoney": {
        "type": "number",
        "description": "涉及统筹金额",
        "allowEmptyValue": false
      },
      "riskNum": {
        "type": "integer",
        "format": "int32",
        "description": "风险点数量",
        "allowEmptyValue": false
      },
      "sex": {
        "type": "string",
        "description": "性别",
        "allowEmptyValue": false
      },
      "totalMoney": {
        "type": "number",
        "description": "涉及金额",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalOutpatient"
  },
  "HospitalPersonTimeStatistics": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "名称",
        "allowEmptyValue": false
      },
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "次数",
        "allowEmptyValue": false
      },
      "orgCode": {
        "type": "string",
        "description": "医疗机构编码",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      },
      "type": {
        "type": "integer",
        "format": "int32",
        "description": "类型 1住院人次，2门/急诊人次",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalPersonTimeStatistics"
  },
  "HospitalRiskEvent": {
    "type": "object",
    "properties": {
      "deptName": {
        "type": "string",
        "description": "涉及科室名称",
        "allowEmptyValue": false
      },
      "doctor": {
        "type": "string",
        "description": "涉及医生",
        "allowEmptyValue": false
      },
      "eventName": {
        "type": "string",
        "description": "事件名称",
        "allowEmptyValue": false
      },
      "person": {
        "type": "string",
        "description": "涉及参保人",
        "allowEmptyValue": false
      },
      "pubMoney": {
        "type": "number",
        "description": "涉及统筹金额",
        "allowEmptyValue": false
      },
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "scanTime": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      },
      "title": {
        "type": "string",
        "description": "事件提示",
        "allowEmptyValue": false
      },
      "totalMoney": {
        "type": "number",
        "description": "涉及金额",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalRiskEvent"
  },
  "HospitalRiskProportion": {
    "type": "object",
    "properties": {
      "eventNum": {
        "type": "integer",
        "format": "int32",
        "description": "事件数量",
        "allowEmptyValue": false
      },
      "levelCode": {
        "type": "string",
        "description": "医院等级编码",
        "allowEmptyValue": false
      },
      "levelName": {
        "type": "string",
        "description": "医院等级名称",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalRiskProportion"
  },
  "HospitalRiskRule": {
    "type": "object",
    "properties": {
      "ruleCode": {
        "type": "string",
        "description": "规则编码",
        "allowEmptyValue": false
      },
      "ruleName": {
        "type": "string",
        "description": "规则名称",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "数量",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalRiskRule"
  },
  "HospitalRiskScan": {
    "type": "object",
    "properties": {
      "riskRuleList": {
        "type": "array",
        "description": "规则",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/HospitalRiskRule"
        }
      },
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "事件数量",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalRiskScan"
  },
  "HospitalRiskType": {
    "type": "object",
    "properties": {
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "事件数量",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalRiskType"
  },
  "HospitalRiskTypeTime": {
    "type": "object",
    "properties": {
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "事件数量",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalRiskTypeTime"
  },
  "HospitalSettlementMoney": {
    "type": "object",
    "properties": {
      "doubtfulMoney": {
        "type": "number",
        "format": "double",
        "description": "疑点金额",
        "allowEmptyValue": false
      },
      "money": {
        "type": "number",
        "format": "double",
        "description": "统筹金额",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "名称",
        "allowEmptyValue": false
      },
      "orgCode": {
        "type": "string",
        "description": "医疗机构编码",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      },
      "totalMoney": {
        "type": "number",
        "format": "double",
        "description": "总计",
        "allowEmptyValue": false
      }
    },
    "title": "HospitalSettlementMoney"
  },
  "Map«RiskEventTypeEnum,int»": {
    "type": "object",
    "title": "Map«RiskEventTypeEnum,int»",
    "additionalProperties": {
      "$ref": "#/definitions/Integer"
    }
  },
  "Page«医院基本信息»": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "页面内容,返回结果集",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/医院基本信息"
        }
      },
      "first": {
        "type": "integer",
        "format": "int32",
        "description": "第一条序号",
        "allowEmptyValue": false
      },
      "limit": {
        "type": "integer",
        "format": "int32",
        "description": "每页显示条数",
        "allowEmptyValue": false
      },
      "page": {
        "type": "integer",
        "format": "int32",
        "description": "页码",
        "allowEmptyValue": false
      },
      "total": {
        "type": "integer",
        "format": "int32",
        "description": "总条数",
        "allowEmptyValue": false
      }
    },
    "title": "Page«医院基本信息»"
  },
  "Page«历史住院风险人员»": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "页面内容,返回结果集",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/历史住院风险人员"
        }
      },
      "first": {
        "type": "integer",
        "format": "int32",
        "description": "第一条序号",
        "allowEmptyValue": false
      },
      "limit": {
        "type": "integer",
        "format": "int32",
        "description": "每页显示条数",
        "allowEmptyValue": false
      },
      "page": {
        "type": "integer",
        "format": "int32",
        "description": "页码",
        "allowEmptyValue": false
      },
      "total": {
        "type": "integer",
        "format": "int32",
        "description": "总条数",
        "allowEmptyValue": false
      }
    },
    "title": "Page«历史住院风险人员»"
  },
  "Page«在院风险人员»": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "页面内容,返回结果集",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/在院风险人员"
        }
      },
      "first": {
        "type": "integer",
        "format": "int32",
        "description": "第一条序号",
        "allowEmptyValue": false
      },
      "limit": {
        "type": "integer",
        "format": "int32",
        "description": "每页显示条数",
        "allowEmptyValue": false
      },
      "page": {
        "type": "integer",
        "format": "int32",
        "description": "页码",
        "allowEmptyValue": false
      },
      "total": {
        "type": "integer",
        "format": "int32",
        "description": "总条数",
        "allowEmptyValue": false
      }
    },
    "title": "Page«在院风险人员»"
  },
  "Page«药店基本信息»": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "页面内容,返回结果集",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/药店基本信息"
        }
      },
      "first": {
        "type": "integer",
        "format": "int32",
        "description": "第一条序号",
        "allowEmptyValue": false
      },
      "limit": {
        "type": "integer",
        "format": "int32",
        "description": "每页显示条数",
        "allowEmptyValue": false
      },
      "page": {
        "type": "integer",
        "format": "int32",
        "description": "页码",
        "allowEmptyValue": false
      },
      "total": {
        "type": "integer",
        "format": "int32",
        "description": "总条数",
        "allowEmptyValue": false
      }
    },
    "title": "Page«药店基本信息»"
  },
  "Page«风险事件»": {
    "type": "object",
    "properties": {
      "content": {
        "type": "array",
        "description": "页面内容,返回结果集",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/风险事件"
        }
      },
      "first": {
        "type": "integer",
        "format": "int32",
        "description": "第一条序号",
        "allowEmptyValue": false
      },
      "limit": {
        "type": "integer",
        "format": "int32",
        "description": "每页显示条数",
        "allowEmptyValue": false
      },
      "page": {
        "type": "integer",
        "format": "int32",
        "description": "页码",
        "allowEmptyValue": false
      },
      "total": {
        "type": "integer",
        "format": "int32",
        "description": "总条数",
        "allowEmptyValue": false
      }
    },
    "title": "Page«风险事件»"
  },
  "PersonHighRiskAgeInfo": {
    "type": "object",
    "properties": {
      "ageRange": {
        "type": "string",
        "description": "年龄范围",
        "allowEmptyValue": false
      },
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "数量",
        "allowEmptyValue": false
      }
    },
    "title": "PersonHighRiskAgeInfo"
  },
  "PersonHighRiskInfo": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "format": "double",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "hospitalNum": {
        "type": "integer",
        "format": "int32",
        "description": "涉及医院数",
        "allowEmptyValue": false
      },
      "idNo": {
        "type": "string",
        "description": "身份证号",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "姓名",
        "allowEmptyValue": false
      },
      "pharmacyNum": {
        "type": "integer",
        "format": "int32",
        "description": "涉及药店数",
        "allowEmptyValue": false
      },
      "phone": {
        "type": "string",
        "description": "手机号",
        "allowEmptyValue": false
      },
      "riskScore": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数",
        "allowEmptyValue": false
      },
      "riskScoreTrend": {
        "type": "string",
        "description": "风险指数趋势,0-不变；1-下降；2-上升",
        "allowEmptyValue": false
      },
      "violationDetail": {
        "type": "string",
        "description": "主要违规信息",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "违规数量",
        "allowEmptyValue": false
      }
    },
    "title": "PersonHighRiskInfo"
  },
  "PersonHighRiskMonitorInfo": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "format": "double",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "behavior": {
        "type": "string",
        "description": "行为",
        "allowEmptyValue": false
      },
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "ruleCode": {
        "type": "string",
        "description": "行为疑点编码",
        "allowEmptyValue": false
      },
      "ruleName": {
        "type": "string",
        "description": "行为疑点名称",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      }
    },
    "title": "PersonHighRiskMonitorInfo"
  },
  "PersonHighRiskTimeInfo": {
    "type": "object",
    "properties": {
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "数量",
        "allowEmptyValue": false
      },
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      }
    },
    "title": "PersonHighRiskTimeInfo"
  },
  "PersonHighRiskTypeInfo": {
    "type": "object",
    "properties": {
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "数量",
        "allowEmptyValue": false
      },
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      }
    },
    "title": "PersonHighRiskTypeInfo"
  },
  "PersonInfo": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "住址",
        "allowEmptyValue": false
      },
      "company": {
        "type": "string",
        "description": "单位",
        "allowEmptyValue": false
      },
      "companyContactPerson": {
        "type": "string",
        "description": "单位联系人",
        "allowEmptyValue": false
      },
      "companyContactPersonTelephone": {
        "type": "string",
        "description": "单位联系人电话",
        "allowEmptyValue": false
      },
      "idNo": {
        "type": "string",
        "description": "身份证号",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "姓名",
        "allowEmptyValue": false
      },
      "riskScore": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数",
        "allowEmptyValue": false
      },
      "tags": {
        "type": "array",
        "description": "风险标签集合",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/标签"
        }
      },
      "telephone": {
        "type": "string",
        "description": "联系电话",
        "allowEmptyValue": false
      }
    },
    "title": "PersonInfo"
  },
  "PersonRiskEventInfo": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "format": "double",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "behavior": {
        "type": "string",
        "description": "行为描述",
        "allowEmptyValue": false
      },
      "orgCode": {
        "type": "string",
        "description": "涉及机构编码",
        "allowEmptyValue": false
      },
      "orgName": {
        "type": "string",
        "description": "涉及机构名称",
        "allowEmptyValue": false
      },
      "riskPoint": {
        "type": "string",
        "description": "风险点",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      }
    },
    "title": "PersonRiskEventInfo"
  },
  "PersonRiskRadarInfo": {
    "type": "object",
    "properties": {
      "riskScore": {
        "type": "number",
        "format": "double",
        "description": "风险指数评分",
        "allowEmptyValue": false
      },
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      }
    },
    "title": "PersonRiskRadarInfo"
  },
  "PersonRiskScoreInfo": {
    "type": "object",
    "properties": {
      "riskScore": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数评分",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      }
    },
    "title": "PersonRiskScoreInfo"
  },
  "PersonRiskTypeInfo": {
    "type": "object",
    "properties": {
      "riskDetails": {
        "type": "object",
        "description": "风险指数评分",
        "allowEmptyValue": false,
        "additionalProperties": {
          "type": "integer",
          "format": "int32"
        }
      },
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      }
    },
    "title": "PersonRiskTypeInfo"
  },
  "PharmacyBaseInfo": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "地址",
        "allowEmptyValue": false
      },
      "code": {
        "type": "string",
        "description": "药店编码",
        "allowEmptyValue": false
      },
      "contact": {
        "type": "string",
        "description": "联系人",
        "allowEmptyValue": false
      },
      "contactPhone": {
        "type": "string",
        "description": "联系电话",
        "allowEmptyValue": false
      },
      "latitude": {
        "type": "string",
        "description": "纬度",
        "allowEmptyValue": false
      },
      "legal": {
        "type": "string",
        "description": "法人",
        "allowEmptyValue": false
      },
      "longitude": {
        "type": "string",
        "description": "经度",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "药店名称",
        "allowEmptyValue": false
      },
      "riskLabel": {
        "type": "string",
        "description": "风险标签",
        "allowEmptyValue": false
      },
      "riskScore": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数",
        "allowEmptyValue": false
      },
      "siContact": {
        "type": "string",
        "description": "医保联系人",
        "allowEmptyValue": false
      },
      "siContactPhone": {
        "type": "string",
        "description": "联系电话",
        "allowEmptyValue": false
      }
    },
    "title": "PharmacyBaseInfo"
  },
  "PharmacyHighAreaMap": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "药店地址",
        "allowEmptyValue": false
      },
      "code": {
        "type": "string",
        "description": "药店编码",
        "allowEmptyValue": false
      },
      "latitude": {
        "type": "string",
        "description": "纬度",
        "allowEmptyValue": false
      },
      "longitude": {
        "type": "string",
        "description": "经度",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "药店名称",
        "allowEmptyValue": false
      }
    },
    "title": "PharmacyHighAreaMap"
  },
  "PharmacyHighList": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "药店编码",
        "allowEmptyValue": false
      },
      "id": {
        "type": "string",
        "description": "药店ID",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "药店名称",
        "allowEmptyValue": false
      },
      "pharmacyRiskTypeList": {
        "type": "array",
        "description": "涉及风险类型",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/PharmacyRiskScan"
        }
      },
      "riskCount": {
        "type": "integer",
        "format": "int32",
        "description": "风险数量",
        "allowEmptyValue": false
      },
      "riskScore": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数",
        "allowEmptyValue": false
      },
      "riskScoreTrend": {
        "type": "integer",
        "format": "int32",
        "description": "风险指数趋势,0-不变；1-下降；2-上升",
        "allowEmptyValue": false
      },
      "type": {
        "type": "string",
        "description": "药店类型",
        "allowEmptyValue": false
      },
      "typeName": {
        "type": "string",
        "description": "药店类型名称",
        "allowEmptyValue": false
      }
    },
    "title": "PharmacyHighList"
  },
  "PharmacyHighTrend": {
    "type": "object",
    "properties": {
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "数量",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      }
    },
    "title": "PharmacyHighTrend"
  },
  "PharmacyRiskEvent": {
    "type": "object",
    "properties": {
      "deptName": {
        "type": "string",
        "description": "涉及科室名称",
        "allowEmptyValue": false
      },
      "doctor": {
        "type": "string",
        "description": "涉及医生",
        "allowEmptyValue": false
      },
      "eventName": {
        "type": "string",
        "description": "事件名称",
        "allowEmptyValue": false
      },
      "person": {
        "type": "string",
        "description": "涉及参保人",
        "allowEmptyValue": false
      },
      "pubMoney": {
        "type": "number",
        "description": "涉及统筹金额",
        "allowEmptyValue": false
      },
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "scanTime": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      },
      "totalMoney": {
        "type": "number",
        "description": "涉及金额",
        "allowEmptyValue": false
      }
    },
    "title": "PharmacyRiskEvent"
  },
  "PharmacyRiskProportion": {
    "type": "object",
    "properties": {
      "eventNum": {
        "type": "integer",
        "format": "int32",
        "description": "事件数量",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "药店类型名称",
        "allowEmptyValue": false
      },
      "type": {
        "type": "string",
        "description": "药店类型",
        "allowEmptyValue": false
      }
    },
    "title": "PharmacyRiskProportion"
  },
  "PharmacyRiskRule": {
    "type": "object",
    "properties": {
      "ruleCode": {
        "type": "string",
        "description": "规则编码",
        "allowEmptyValue": false
      },
      "ruleName": {
        "type": "string",
        "description": "规则名称",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "数量",
        "allowEmptyValue": false
      }
    },
    "title": "PharmacyRiskRule"
  },
  "PharmacyRiskScan": {
    "type": "object",
    "properties": {
      "riskRuleList": {
        "type": "array",
        "description": "规则",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/PharmacyRiskRule"
        }
      },
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "事件数量",
        "allowEmptyValue": false
      }
    },
    "title": "PharmacyRiskScan"
  },
  "PharmacyRiskType": {
    "type": "object",
    "properties": {
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "事件数量",
        "allowEmptyValue": false
      }
    },
    "title": "PharmacyRiskType"
  },
  "PharmacyRiskTypeTime": {
    "type": "object",
    "properties": {
      "riskTypeCode": {
        "type": "string",
        "description": "风险类型编码",
        "allowEmptyValue": false
      },
      "riskTypeName": {
        "type": "string",
        "description": "风险类型名称",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      },
      "violationNum": {
        "type": "integer",
        "format": "int32",
        "description": "事件数量",
        "allowEmptyValue": false
      }
    },
    "title": "PharmacyRiskTypeTime"
  },
  "PharmacyTransactionList": {
    "type": "object",
    "properties": {
      "age": {
        "type": "string",
        "description": "年龄",
        "allowEmptyValue": false
      },
      "contactPhone": {
        "type": "string",
        "description": "联系电话",
        "allowEmptyValue": false
      },
      "eventName": {
        "type": "string",
        "description": "事件名称",
        "allowEmptyValue": false
      },
      "idCode": {
        "type": "string",
        "description": "身份证",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "姓名",
        "allowEmptyValue": false
      },
      "personNo": {
        "type": "string",
        "description": "个人医保编号",
        "allowEmptyValue": false
      },
      "riskNum": {
        "type": "integer",
        "format": "int32",
        "description": "风险点数量",
        "allowEmptyValue": false
      },
      "sex": {
        "type": "string",
        "description": "性别",
        "allowEmptyValue": false
      },
      "totalMoney": {
        "type": "number",
        "description": "涉及金额",
        "allowEmptyValue": false
      }
    },
    "title": "PharmacyTransactionList"
  },
  "RiskEventDetail": {
    "type": "object",
    "properties": {
      "describe": {
        "type": "string",
        "description": "事件描述",
        "allowEmptyValue": false
      },
      "money": {
        "type": "number",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "orgCode": {
        "type": "string",
        "description": "医疗机构编码",
        "allowEmptyValue": false
      },
      "orgName": {
        "type": "string",
        "description": "医疗机构名称",
        "allowEmptyValue": false
      },
      "ruleName": {
        "type": "string",
        "description": "规则名称",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      },
      "type": {
        "type": "string",
        "description": "01医院,02医师,03药店,04参保人",
        "allowEmptyValue": false
      }
    },
    "title": "RiskEventDetail"
  },
  "RiskEventHistoryOrgInfo": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "eventNum": {
        "type": "integer",
        "format": "int32",
        "description": "事件数量",
        "allowEmptyValue": false
      },
      "orgCode": {
        "type": "string",
        "description": "机构编码",
        "allowEmptyValue": false
      },
      "orgName": {
        "type": "string",
        "description": "机构名称",
        "allowEmptyValue": false
      }
    },
    "title": "RiskEventHistoryOrgInfo"
  },
  "RiskEventHistoryTimeInfo": {
    "type": "object",
    "properties": {
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "数量",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      },
      "typeCode": {
        "type": "string",
        "description": "类型编码",
        "allowEmptyValue": false
      },
      "typeName": {
        "type": "string",
        "description": "类型名称",
        "allowEmptyValue": false
      }
    },
    "title": "RiskEventHistoryTimeInfo"
  },
  "RiskEventHistoryTypeInfo": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "eventNum": {
        "type": "integer",
        "format": "int32",
        "description": "事件数量",
        "allowEmptyValue": false
      },
      "orgNum": {
        "type": "integer",
        "format": "int32",
        "description": "机构数量",
        "allowEmptyValue": false
      },
      "typeCode": {
        "type": "string",
        "description": "类型编码",
        "allowEmptyValue": false
      },
      "typeName": {
        "type": "string",
        "description": "类型名称",
        "allowEmptyValue": false
      }
    },
    "title": "RiskEventHistoryTypeInfo"
  },
  "RiskEventInfo": {
    "type": "object",
    "properties": {
      "doctorDepartment": {
        "type": "string",
        "description": "科室",
        "allowEmptyValue": false
      },
      "doctorIdNo": {
        "type": "string",
        "description": "涉及医师身份证",
        "allowEmptyValue": false
      },
      "doctorName": {
        "type": "string",
        "description": "涉及医师姓名",
        "allowEmptyValue": false
      },
      "medicalType": {
        "type": "string",
        "description": "就诊类型，1-门诊，2-住院，3-购药",
        "allowEmptyValue": false
      },
      "orgCode": {
        "type": "string",
        "description": "涉及机构编码",
        "allowEmptyValue": false
      },
      "orgName": {
        "type": "string",
        "description": "涉及机构名称",
        "allowEmptyValue": false
      },
      "orgType": {
        "type": "string",
        "description": "涉及机构类型",
        "allowEmptyValue": false
      },
      "personIdNo": {
        "type": "string",
        "description": "涉及参保人身份证",
        "allowEmptyValue": false
      },
      "personName": {
        "type": "string",
        "description": "涉及参保人姓名",
        "allowEmptyValue": false
      },
      "personNo": {
        "type": "string",
        "description": "涉及参保人个人编号",
        "allowEmptyValue": false
      },
      "pubAmount": {
        "type": "number",
        "format": "double",
        "description": "涉及统筹金额",
        "allowEmptyValue": false
      },
      "riskEventDescribe": {
        "type": "string",
        "description": "风险事件描述",
        "allowEmptyValue": false
      },
      "riskEventDetail": {
        "type": "string",
        "description": "风险事件详细信息",
        "allowEmptyValue": false
      },
      "ruleCode": {
        "type": "string",
        "description": "规则编码",
        "allowEmptyValue": false
      },
      "ruleIdentifyNo": {
        "type": "string",
        "description": "规则执行流水号",
        "allowEmptyValue": false
      },
      "ruleSeqNo": {
        "type": "string",
        "description": "规则执行序号",
        "allowEmptyValue": false
      },
      "ruleVersion": {
        "type": "string",
        "description": "版本号",
        "allowEmptyValue": false
      },
      "scanTime": {
        "type": "string",
        "format": "date-time",
        "description": "扫描时间",
        "allowEmptyValue": false
      },
      "scannerCityCode": {
        "type": "string",
        "description": "地区编码",
        "allowEmptyValue": false
      },
      "scannerCode": {
        "type": "string",
        "description": "Scanner编码",
        "allowEmptyValue": false
      },
      "totalAmount": {
        "type": "number",
        "format": "double",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "visitNo": {
        "type": "string",
        "description": "涉及就诊流水号",
        "allowEmptyValue": false
      }
    },
    "title": "RiskEventInfo"
  },
  "RiskEventNum": {
    "type": "object",
    "properties": {
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "数量",
        "allowEmptyValue": false
      },
      "type": {
        "type": "string",
        "description": "01医院,02医师,03药店,04参保人",
        "allowEmptyValue": false
      }
    },
    "title": "RiskEventNum"
  },
  "RiskEventOrgLocation": {
    "type": "object",
    "properties": {
      "latitude": {
        "type": "string",
        "description": "纬度",
        "allowEmptyValue": false
      },
      "longitude": {
        "type": "string",
        "description": "经度",
        "allowEmptyValue": false
      },
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "事件数量",
        "allowEmptyValue": false
      },
      "orgCode": {
        "type": "string",
        "description": "医疗机构编码",
        "allowEmptyValue": false
      },
      "orgName": {
        "type": "string",
        "description": "医疗机构名称",
        "allowEmptyValue": false
      }
    },
    "title": "RiskEventOrgLocation"
  },
  "RiskEventOrgLocationMap": {
    "type": "object",
    "properties": {
      "hospital": {
        "type": "array",
        "description": "医院",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/RiskEventOrgLocation"
        }
      },
      "pharmacy": {
        "type": "array",
        "description": "药店",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/RiskEventOrgLocation"
        }
      }
    },
    "title": "RiskEventOrgLocationMap"
  },
  "RiskEventTime": {
    "type": "object",
    "properties": {
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "数量",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      },
      "typeCode": {
        "type": "string",
        "description": "类型编码",
        "allowEmptyValue": false
      },
      "typeName": {
        "type": "string",
        "description": "类型名称",
        "allowEmptyValue": false
      }
    },
    "title": "RiskEventTime"
  },
  "RiskEventTimeMap": {
    "type": "object",
    "properties": {
      "list": {
        "type": "array",
        "description": "时刻统计",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/RiskEventTime"
        }
      },
      "type": {
        "type": "string",
        "description": "类型 01医院，02药店，03医师，04参保人",
        "allowEmptyValue": false
      }
    },
    "title": "RiskEventTimeMap"
  },
  "RiskEventType": {
    "type": "object",
    "properties": {
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "数量",
        "allowEmptyValue": false
      },
      "type": {
        "type": "string",
        "description": "01医院,02医师,03药店,04参保人",
        "allowEmptyValue": false
      },
      "typeCode": {
        "type": "string",
        "description": "类型编码",
        "allowEmptyValue": false
      },
      "typeName": {
        "type": "string",
        "description": "类型名称",
        "allowEmptyValue": false
      }
    },
    "title": "RiskEventType"
  },
  "RiskEventTypeEnum": {
    "type": "object",
    "title": "RiskEventTypeEnum"
  },
  "RuleRunResult": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "调度任务执行结果：0-成功;1-失败",
        "allowEmptyValue": false
      },
      "finishTime": {
        "type": "string",
        "format": "date-time",
        "description": "完成时间",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "错误原因",
        "allowEmptyValue": false
      },
      "ruleCode": {
        "type": "string",
        "description": "规则编码",
        "allowEmptyValue": false
      },
      "ruleIdentifyNo": {
        "type": "string",
        "description": "规则执行流水号",
        "allowEmptyValue": false
      },
      "ruleSeqNo": {
        "type": "string",
        "description": "规则执行序号",
        "allowEmptyValue": false
      },
      "ruleVersion": {
        "type": "string",
        "description": "版本号",
        "allowEmptyValue": false
      },
      "scannerCityCode": {
        "type": "string",
        "description": "城市编码",
        "allowEmptyValue": false
      },
      "scannerCode": {
        "type": "string",
        "description": "Scanner编码",
        "allowEmptyValue": false
      }
    },
    "title": "RuleRunResult"
  },
  "ScannerRegisterInfo": {
    "type": "object",
    "properties": {
      "scannerAddress": {
        "type": "string"
      },
      "scannerCityCode": {
        "type": "string"
      },
      "scannerCode": {
        "type": "string"
      },
      "scannerDescribe": {
        "type": "string"
      },
      "scannerName": {
        "type": "string"
      },
      "scannerPort": {
        "type": "string"
      },
      "scannerProtocol": {
        "type": "string"
      },
      "scannerRuleList": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "title": "ScannerRegisterInfo"
  },
  "TransactionAgeDistribution": {
    "type": "object",
    "properties": {
      "age": {
        "type": "string",
        "description": "年龄",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "名称",
        "allowEmptyValue": false
      },
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "次数",
        "allowEmptyValue": false
      },
      "type": {
        "type": "integer",
        "format": "int32",
        "description": "类型 1全市平均，2本院",
        "allowEmptyValue": false
      }
    },
    "title": "TransactionAgeDistribution"
  },
  "TransactionNumDistribution": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "名称",
        "allowEmptyValue": false
      },
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "次数",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      },
      "type": {
        "type": "integer",
        "format": "int32",
        "description": "类型 1全市平均，2本院",
        "allowEmptyValue": false
      }
    },
    "title": "TransactionNumDistribution"
  },
  "TransactionPharmacyDistribution": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "药店编码",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "药店名称",
        "allowEmptyValue": false
      },
      "num": {
        "type": "integer",
        "format": "int32",
        "description": "次数",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "时间",
        "allowEmptyValue": false
      }
    },
    "title": "TransactionPharmacyDistribution"
  },
  "人员行为": {
    "type": "object",
    "properties": {
      "area_code": {
        "type": "string",
        "description": "区域ID(统筹区ID)",
        "allowEmptyValue": false
      },
      "dept_name": {
        "type": "string",
        "description": "涉及科室名称",
        "allowEmptyValue": false
      },
      "doctor_id_code": {
        "type": "string",
        "description": "涉及医生ID",
        "allowEmptyValue": false
      },
      "doctor_name": {
        "type": "string",
        "description": "涉及医生姓名",
        "allowEmptyValue": false
      },
      "hos_grade": {
        "type": "string",
        "description": "涉及医院等级",
        "allowEmptyValue": false
      },
      "medical_type": {
        "type": "string",
        "description": "就诊类型：1门诊、2住院、3购药",
        "allowEmptyValue": false
      },
      "org_code": {
        "type": "string",
        "description": "涉及机构ID",
        "allowEmptyValue": false
      },
      "org_type": {
        "type": "string",
        "description": "涉及机构类型:1医院、2药店",
        "allowEmptyValue": false
      },
      "person_id_no": {
        "type": "string",
        "description": "身份证号",
        "allowEmptyValue": false
      },
      "person_name": {
        "type": "string",
        "description": "姓名",
        "allowEmptyValue": false
      },
      "person_no": {
        "type": "string",
        "description": "医保参保编号",
        "allowEmptyValue": false
      },
      "pub_money": {
        "type": "number",
        "description": "涉及统筹金额",
        "allowEmptyValue": false
      },
      "total_money": {
        "type": "number",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "visit_no": {
        "type": "string",
        "description": "就诊流水号",
        "allowEmptyValue": false
      },
      "visit_time": {
        "type": "string",
        "format": "date-time",
        "description": "就诊时间",
        "allowEmptyValue": false
      }
    },
    "title": "人员行为"
  },
  "医院基本信息": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "医院地址",
        "allowEmptyValue": false
      },
      "bedNumber": {
        "type": "integer",
        "format": "int32",
        "description": "医院床位数",
        "allowEmptyValue": false
      },
      "code": {
        "type": "string",
        "description": "医院编码",
        "allowEmptyValue": false
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间",
        "allowEmptyValue": false
      },
      "createUser": {
        "type": "string",
        "description": "创建人",
        "allowEmptyValue": false
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "唯一主键",
        "allowEmptyValue": false
      },
      "insuranceContactName": {
        "type": "string",
        "description": "医院医保联系人姓名",
        "allowEmptyValue": false
      },
      "insuranceContactTelephone": {
        "type": "string",
        "description": "医院医保联系人电话",
        "allowEmptyValue": false
      },
      "isDelete": {
        "type": "integer",
        "format": "int32",
        "description": "逻辑删除标记0有效 1无效",
        "allowEmptyValue": false
      },
      "latitude": {
        "type": "string",
        "description": "医院地图纬度",
        "allowEmptyValue": false
      },
      "level": {
        "type": "string",
        "description": "医院等级",
        "allowEmptyValue": false
      },
      "longitude": {
        "type": "string",
        "description": "医院地图经度",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "医院名称",
        "allowEmptyValue": false
      },
      "riskScore": {
        "description": "风险评分",
        "allowEmptyValue": false,
        "$ref": "#/definitions/风险评分"
      },
      "tags": {
        "type": "array",
        "description": "医院风险标签集合",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/标签"
        }
      },
      "telephone": {
        "type": "string",
        "description": "医院联系电话",
        "allowEmptyValue": false
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "更新时间-数据库自动生成",
        "allowEmptyValue": false
      },
      "updateUser": {
        "type": "string",
        "description": "更新人",
        "allowEmptyValue": false
      }
    },
    "title": "医院基本信息"
  },
  "历史住院风险人员": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "description": "统筹支出",
        "allowEmptyValue": false
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间",
        "allowEmptyValue": false
      },
      "createUser": {
        "type": "string",
        "description": "创建人",
        "allowEmptyValue": false
      },
      "department": {
        "type": "string",
        "description": "科室",
        "allowEmptyValue": false
      },
      "diagnosis": {
        "type": "string",
        "description": "诊断ICD",
        "allowEmptyValue": false
      },
      "diagnosisName": {
        "type": "string",
        "description": "诊断名称",
        "allowEmptyValue": false
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "唯一主键",
        "allowEmptyValue": false
      },
      "inDate": {
        "type": "string",
        "description": "入院日期 yyyy-MM-dd",
        "allowEmptyValue": false
      },
      "inDayNum": {
        "type": "string",
        "description": "入院天数",
        "allowEmptyValue": false
      },
      "isDelete": {
        "type": "integer",
        "format": "int32",
        "description": "逻辑删除标记0有效 1无效",
        "allowEmptyValue": false
      },
      "outDate": {
        "type": "string",
        "description": "出院日期 yyyy-MM-dd",
        "allowEmptyValue": false
      },
      "personIdCard": {
        "type": "string",
        "description": "身份证号",
        "allowEmptyValue": false
      },
      "personName": {
        "type": "string",
        "description": "姓名",
        "allowEmptyValue": false
      },
      "phone": {
        "type": "string",
        "description": "联系电话",
        "allowEmptyValue": false
      },
      "riskNum": {
        "type": "string",
        "description": "病案疑点数",
        "allowEmptyValue": false
      },
      "riskScore": {
        "type": "string",
        "description": "风险指数",
        "allowEmptyValue": false
      },
      "siCardNo": {
        "type": "string",
        "description": "医保编号",
        "allowEmptyValue": false
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "更新时间-数据库自动生成",
        "allowEmptyValue": false
      },
      "updateUser": {
        "type": "string",
        "description": "更新人",
        "allowEmptyValue": false
      }
    },
    "title": "历史住院风险人员"
  },
  "在院风险人员": {
    "type": "object",
    "properties": {
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间",
        "allowEmptyValue": false
      },
      "createUser": {
        "type": "string",
        "description": "创建人",
        "allowEmptyValue": false
      },
      "department": {
        "type": "string",
        "description": "科室",
        "allowEmptyValue": false
      },
      "diagnosis": {
        "type": "string",
        "description": "诊断ICD",
        "allowEmptyValue": false
      },
      "diagnosisName": {
        "type": "string",
        "description": "诊断名称",
        "allowEmptyValue": false
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "唯一主键",
        "allowEmptyValue": false
      },
      "inDate": {
        "type": "string",
        "description": "入院日期 yyyy-MM-dd",
        "allowEmptyValue": false
      },
      "inDayNum": {
        "type": "string",
        "description": "入院天数",
        "allowEmptyValue": false
      },
      "isDelete": {
        "type": "integer",
        "format": "int32",
        "description": "逻辑删除标记0有效 1无效",
        "allowEmptyValue": false
      },
      "personIdCard": {
        "type": "string",
        "description": "身份证号",
        "allowEmptyValue": false
      },
      "personName": {
        "type": "string",
        "description": "姓名",
        "allowEmptyValue": false
      },
      "phone": {
        "type": "string",
        "description": "联系电话",
        "allowEmptyValue": false
      },
      "riskNum": {
        "type": "string",
        "description": "风险点数",
        "allowEmptyValue": false
      },
      "riskScore": {
        "type": "string",
        "description": "风险指数",
        "allowEmptyValue": false
      },
      "siCardNo": {
        "type": "string",
        "description": "医保编号",
        "allowEmptyValue": false
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "更新时间-数据库自动生成",
        "allowEmptyValue": false
      },
      "updateUser": {
        "type": "string",
        "description": "更新人",
        "allowEmptyValue": false
      }
    },
    "title": "在院风险人员"
  },
  "服务应答数据对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "type": "object",
        "description": "应答数据",
        "allowEmptyValue": false
      }
    },
    "title": "服务应答数据对象"
  },
  "服务应答数据对象«List«医院基本信息»»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "type": "array",
        "description": "应答数据",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/医院基本信息"
        }
      }
    },
    "title": "服务应答数据对象«List«医院基本信息»»"
  },
  "服务应答数据对象«List«药店基本信息»»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "type": "array",
        "description": "应答数据",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/药店基本信息"
        }
      }
    },
    "title": "服务应答数据对象«List«药店基本信息»»"
  },
  "服务应答数据对象«List«风险评分»»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "type": "array",
        "description": "应答数据",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/风险评分"
        }
      }
    },
    "title": "服务应答数据对象«List«风险评分»»"
  },
  "服务应答数据对象«Page«医院基本信息»»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "description": "应答数据",
        "allowEmptyValue": false,
        "$ref": "#/definitions/Page«医院基本信息»"
      }
    },
    "title": "服务应答数据对象«Page«医院基本信息»»"
  },
  "服务应答数据对象«Page«历史住院风险人员»»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "description": "应答数据",
        "allowEmptyValue": false,
        "$ref": "#/definitions/Page«历史住院风险人员»"
      }
    },
    "title": "服务应答数据对象«Page«历史住院风险人员»»"
  },
  "服务应答数据对象«Page«在院风险人员»»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "description": "应答数据",
        "allowEmptyValue": false,
        "$ref": "#/definitions/Page«在院风险人员»"
      }
    },
    "title": "服务应答数据对象«Page«在院风险人员»»"
  },
  "服务应答数据对象«Page«药店基本信息»»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "description": "应答数据",
        "allowEmptyValue": false,
        "$ref": "#/definitions/Page«药店基本信息»"
      }
    },
    "title": "服务应答数据对象«Page«药店基本信息»»"
  },
  "服务应答数据对象«Page«风险事件»»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "description": "应答数据",
        "allowEmptyValue": false,
        "$ref": "#/definitions/Page«风险事件»"
      }
    },
    "title": "服务应答数据对象«Page«风险事件»»"
  },
  "服务应答数据对象«医院基本信息»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "description": "应答数据",
        "allowEmptyValue": false,
        "$ref": "#/definitions/医院基本信息"
      }
    },
    "title": "服务应答数据对象«医院基本信息»"
  },
  "服务应答数据对象«药店基本信息»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "description": "应答数据",
        "allowEmptyValue": false,
        "$ref": "#/definitions/药店基本信息"
      }
    },
    "title": "服务应答数据对象«药店基本信息»"
  },
  "服务应答数据对象«风险统计»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64",
        "description": "响应代码，\"0\" 正常，其他值为错误代码",
        "allowEmptyValue": false
      },
      "msg": {
        "type": "string",
        "description": "响应消息，\"ok\" 正常，其他值为错误消息",
        "allowEmptyValue": false
      },
      "value": {
        "description": "应答数据",
        "allowEmptyValue": false,
        "$ref": "#/definitions/风险统计"
      }
    },
    "title": "服务应答数据对象«风险统计»"
  },
  "标签": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "标签编码",
        "allowEmptyValue": false
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间",
        "allowEmptyValue": false
      },
      "createUser": {
        "type": "string",
        "description": "创建人",
        "allowEmptyValue": false
      },
      "description": {
        "type": "string",
        "description": "标签描述",
        "allowEmptyValue": false
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "唯一主键",
        "allowEmptyValue": false
      },
      "isDelete": {
        "type": "integer",
        "format": "int32",
        "description": "逻辑删除标记0有效 1无效",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "标签名称",
        "allowEmptyValue": false
      },
      "type": {
        "type": "integer",
        "format": "int32",
        "description": "标签类型，0:风险标签",
        "allowEmptyValue": false
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "更新时间-数据库自动生成",
        "allowEmptyValue": false
      },
      "updateUser": {
        "type": "string",
        "description": "更新人",
        "allowEmptyValue": false
      },
      "weight": {
        "type": "integer",
        "format": "int32",
        "description": "权重",
        "allowEmptyValue": false
      }
    },
    "title": "标签"
  },
  "药店基本信息": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string",
        "description": "药店地址",
        "allowEmptyValue": false
      },
      "code": {
        "type": "string",
        "description": "药店编码",
        "allowEmptyValue": false
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间",
        "allowEmptyValue": false
      },
      "createUser": {
        "type": "string",
        "description": "创建人",
        "allowEmptyValue": false
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "唯一主键",
        "allowEmptyValue": false
      },
      "insuranceContactName": {
        "type": "string",
        "description": "药店医保联系人姓名",
        "allowEmptyValue": false
      },
      "insuranceContactTelephone": {
        "type": "string",
        "description": "药店医保联系人电话",
        "allowEmptyValue": false
      },
      "isDelete": {
        "type": "integer",
        "format": "int32",
        "description": "逻辑删除标记0有效 1无效",
        "allowEmptyValue": false
      },
      "latitude": {
        "type": "string",
        "description": "药店地图纬度",
        "allowEmptyValue": false
      },
      "legalPersonName": {
        "type": "string",
        "description": "药店法人姓名",
        "allowEmptyValue": false
      },
      "longitude": {
        "type": "string",
        "description": "药店地图经度",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "药店名称",
        "allowEmptyValue": false
      },
      "riskScore": {
        "description": "风险评分",
        "allowEmptyValue": false,
        "$ref": "#/definitions/风险评分"
      },
      "tags": {
        "type": "array",
        "description": "药店风险标签集合",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/标签"
        }
      },
      "telephone": {
        "type": "string",
        "description": "药店联系电话",
        "allowEmptyValue": false
      },
      "type": {
        "type": "integer",
        "format": "int32",
        "description": "药店类型",
        "allowEmptyValue": false
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "更新时间-数据库自动生成",
        "allowEmptyValue": false
      },
      "updateUser": {
        "type": "string",
        "description": "更新人",
        "allowEmptyValue": false
      }
    },
    "title": "药店基本信息"
  },
  "风险事件": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间",
        "allowEmptyValue": false
      },
      "createUser": {
        "type": "string",
        "description": "创建人",
        "allowEmptyValue": false
      },
      "department": {
        "type": "string",
        "description": "科室",
        "allowEmptyValue": false
      },
      "description": {
        "type": "string",
        "description": "事件描述",
        "allowEmptyValue": false
      },
      "doctor": {
        "type": "string",
        "description": "医师",
        "allowEmptyValue": false
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "唯一主键",
        "allowEmptyValue": false
      },
      "insuredPerson": {
        "type": "string",
        "description": "参保人",
        "allowEmptyValue": false
      },
      "isDelete": {
        "type": "integer",
        "format": "int32",
        "description": "逻辑删除标记0有效 1无效",
        "allowEmptyValue": false
      },
      "time": {
        "type": "string",
        "description": "发生时间 yyyy-MM-dd hh:mm:ss",
        "allowEmptyValue": false
      },
      "type": {
        "description": "风险类型",
        "allowEmptyValue": false,
        "$ref": "#/definitions/RiskEventTypeEnum"
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "更新时间-数据库自动生成",
        "allowEmptyValue": false
      },
      "updateUser": {
        "type": "string",
        "description": "更新人",
        "allowEmptyValue": false
      }
    },
    "title": "风险事件"
  },
  "风险统计": {
    "type": "object",
    "properties": {
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间",
        "allowEmptyValue": false
      },
      "createUser": {
        "type": "string",
        "description": "创建人",
        "allowEmptyValue": false
      },
      "hospitalLevelStatistics": {
        "type": "object",
        "description": "统计风险事件个数,按照医院等级统计",
        "allowEmptyValue": false,
        "additionalProperties": {
          "type": "integer",
          "format": "int32"
        }
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "唯一主键",
        "allowEmptyValue": false
      },
      "isDelete": {
        "type": "integer",
        "format": "int32",
        "description": "逻辑删除标记0有效 1无效",
        "allowEmptyValue": false
      },
      "pharmacyTypeStatistics": {
        "type": "object",
        "description": "统计风险事件个数,按照药店类型统计",
        "allowEmptyValue": false,
        "additionalProperties": {
          "type": "integer",
          "format": "int32"
        }
      },
      "riskCount": {
        "type": "integer",
        "format": "int32",
        "description": "统计风险事件总个数",
        "allowEmptyValue": false
      },
      "riskCountHistoryStatistics": {
        "type": "object",
        "description": "统计风险事件个数,历史数据按月分组",
        "allowEmptyValue": false,
        "additionalProperties": {
          "type": "integer",
          "format": "int32"
        }
      },
      "riskObjectStatistics": {
        "type": "object",
        "description": "风险对象数量统计",
        "allowEmptyValue": false,
        "additionalProperties": {
          "type": "integer",
          "format": "int32"
        }
      },
      "riskTypeHistoryStatistics": {
        "type": "object",
        "description": "统计风险事件个数,按照风险类型统计历史数据按月分组",
        "allowEmptyValue": false,
        "additionalProperties": {
          "type": "object",
          "additionalProperties": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "riskTypeStatistics": {
        "type": "array",
        "description": "统计风险事件个数,照风险类型统计",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/Map«RiskEventTypeEnum,int»"
        }
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "更新时间-数据库自动生成",
        "allowEmptyValue": false
      },
      "updateUser": {
        "type": "string",
        "description": "更新人",
        "allowEmptyValue": false
      }
    },
    "title": "风险统计"
  },
  "风险评分": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "description": "涉及金额",
        "allowEmptyValue": false
      },
      "code": {
        "type": "string",
        "description": "机构编码",
        "allowEmptyValue": false
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间",
        "allowEmptyValue": false
      },
      "createUser": {
        "type": "string",
        "description": "创建人",
        "allowEmptyValue": false
      },
      "date": {
        "type": "string",
        "description": "评分日期 yyyy-MM-dd",
        "allowEmptyValue": false
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "唯一主键",
        "allowEmptyValue": false
      },
      "illegalInfo": {
        "type": "array",
        "description": "违规信息",
        "allowEmptyValue": false,
        "items": {
          "type": "string"
        }
      },
      "isDelete": {
        "type": "integer",
        "format": "int32",
        "description": "逻辑删除标记0有效 1无效",
        "allowEmptyValue": false
      },
      "list": {
        "type": "array",
        "description": "风险评分明细",
        "allowEmptyValue": false,
        "items": {
          "$ref": "#/definitions/风险评分明细"
        }
      },
      "riskCount": {
        "type": "integer",
        "format": "int32",
        "description": "违规数量",
        "allowEmptyValue": false
      },
      "totalScore": {
        "type": "integer",
        "format": "int32",
        "description": "总评分",
        "allowEmptyValue": false
      },
      "totalScoreBefore": {
        "type": "integer",
        "format": "int32",
        "description": "上一次总评分",
        "allowEmptyValue": false
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "更新时间-数据库自动生成",
        "allowEmptyValue": false
      },
      "updateUser": {
        "type": "string",
        "description": "更新人",
        "allowEmptyValue": false
      }
    },
    "title": "风险评分"
  },
  "风险评分明细": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "风险规则编码",
        "allowEmptyValue": false
      },
      "createTime": {
        "type": "string",
        "format": "date-time",
        "description": "创建时间",
        "allowEmptyValue": false
      },
      "createUser": {
        "type": "string",
        "description": "创建人",
        "allowEmptyValue": false
      },
      "id": {
        "type": "integer",
        "format": "int64",
        "description": "唯一主键",
        "allowEmptyValue": false
      },
      "isDelete": {
        "type": "integer",
        "format": "int32",
        "description": "逻辑删除标记0有效 1无效",
        "allowEmptyValue": false
      },
      "name": {
        "type": "string",
        "description": "风险规则名称",
        "allowEmptyValue": false
      },
      "result": {
        "type": "string",
        "description": "风险规则结果",
        "allowEmptyValue": false
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "更新时间-数据库自动生成",
        "allowEmptyValue": false
      },
      "updateUser": {
        "type": "string",
        "description": "更新人",
        "allowEmptyValue": false
      }
    },
    "title": "风险评分明细"
  }
};
