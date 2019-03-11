/*  自动生成的文件,勿动  */

export default {
  "common-controller": [
    {
      "path": "/api/v1/common/cities",
      "type": "get",
      "parameter": {},
      "model": "CityInfo",
      "tag": "common-controller",
      "desc": "查询支持的城市列表"
    },
    {
      "path": "/api/v1/common/date",
      "type": "get",
      "parameter": {},
      "model": "服务应答数据对象",
      "tag": "common-controller",
      "desc": "-"
    },
    {
      "path": "/api/v1/common/grade",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象",
      "tag": "common-controller",
      "desc": "给所有实体进行评分"
    },
    {
      "path": "/api/v1/common/init/data",
      "type": "get",
      "parameter": {},
      "model": "服务应答数据对象",
      "tag": "common-controller",
      "desc": "-"
    },
    {
      "path": "/api/v1/common/risk-event/detail",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventDetail",
      "tag": "common-controller",
      "desc": "首页实时风险事件列表"
    },
    {
      "path": "/api/v1/common/risk-event/num",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventNum",
      "tag": "common-controller",
      "desc": "首页实时风险事件雷达预警"
    },
    {
      "path": "/api/v1/common/risk-event/org/location",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventOrgLocationMap",
      "tag": "common-controller",
      "desc": "首页实时风险事件雷达预警坐标"
    },
    {
      "path": "/api/v1/common/risk-event/time",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventTimeMap",
      "tag": "common-controller",
      "desc": "首页本日医院风险事件趋势"
    },
    {
      "path": "/api/v1/common/risk-event/type",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventType",
      "tag": "common-controller",
      "desc": "首页本日风险事件明细"
    }
  ],
  "doctor-controller": [
    {
      "path": "/api/v1/doctor/base/info",
      "type": "get",
      "parameter": {
        "id_code": {
          "name": "id_code",
          "in": "query",
          "description": "id_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "DoctorBaseInfo",
      "tag": "doctor-controller",
      "desc": "医师基础信息查询"
    },
    {
      "path": "/api/v1/doctor/high-risk/count",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "DoctorHighRiskCount",
      "tag": "doctor-controller",
      "desc": "医师规范行为统计"
    },
    {
      "path": "/api/v1/doctor/high-risk/distribution",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "DoctorHighRiskDistribution",
      "tag": "doctor-controller",
      "desc": "高风险医师违规行为分布"
    },
    {
      "path": "/api/v1/doctor/high-risk/hospital",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "DoctorHighRiskHospital",
      "tag": "doctor-controller",
      "desc": "高风险医师按医院分布"
    },
    {
      "path": "/api/v1/doctor/high-risk/list",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "DoctorHighRiskInfo",
      "tag": "doctor-controller",
      "desc": "高风险医师列表（近一个月）"
    },
    {
      "path": "/api/v1/doctor/high-risk/monitor",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "DoctorHighRiskMonitorInfo",
      "tag": "doctor-controller",
      "desc": "高风险医师近期医保行为监控"
    },
    {
      "path": "/api/v1/doctor/risk-event/history/class",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTypeInfo",
      "tag": "doctor-controller",
      "desc": "首页风险事件按类型分布(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/doctor/risk-event/history/org",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryOrgInfo",
      "tag": "doctor-controller",
      "desc": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/doctor/risk-event/history/time",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTimeInfo",
      "tag": "doctor-controller",
      "desc": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/doctor/risk-event/history/type",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTypeInfo",
      "tag": "doctor-controller",
      "desc": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/doctor/risk/score",
      "type": "get",
      "parameter": {
        "id_code": {
          "name": "id_code",
          "in": "query",
          "description": "id_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "DoctorRiskScore",
      "tag": "doctor-controller",
      "desc": "风险指数走势"
    }
  ],
  "hospital-controller": [
    {
      "path": "/api/v1/hospital/high-hospital/ageDistribution",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalInAgeDistribution",
      "tag": "hospital-controller",
      "desc": "住院人年龄分布"
    },
    {
      "path": "/api/v1/hospital/high-hospital/baseInfo",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalBaseInfo",
      "tag": "hospital-controller",
      "desc": "医院详情"
    },
    {
      "path": "/api/v1/hospital/high-hospital/bedRatio",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalHighTrend",
      "tag": "hospital-controller",
      "desc": "床位利用率"
    },
    {
      "path": "/api/v1/hospital/high-hospital/hospitalHospitalization",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        },
        "risk_type": {
          "name": "risk_type",
          "in": "query",
          "description": "risk_type",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalHospitalization",
      "tag": "hospital-controller",
      "desc": "本日住院"
    },
    {
      "path": "/api/v1/hospital/high-hospital/hospitalHospitalizationHistory",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        },
        "risk_type": {
          "name": "risk_type",
          "in": "query",
          "description": "risk_type",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      },
      "model": "HospitalHospitalization",
      "tag": "hospital-controller",
      "desc": "历史住院"
    },
    {
      "path": "/api/v1/hospital/high-hospital/hospitalOutpatient",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        },
        "risk_type": {
          "name": "risk_type",
          "in": "query",
          "description": "risk_type",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalOutpatient",
      "tag": "hospital-controller",
      "desc": "本日门/急诊"
    },
    {
      "path": "/api/v1/hospital/high-hospital/hospitalOutpatientHistory",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        },
        "risk_type": {
          "name": "risk_type",
          "in": "query",
          "description": "risk_type",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      },
      "model": "HospitalOutpatient",
      "tag": "hospital-controller",
      "desc": "历史门/急诊"
    },
    {
      "path": "/api/v1/hospital/high-hospital/hospitalPersonTimeStatistics",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalPersonTimeStatistics",
      "tag": "hospital-controller",
      "desc": "门/急诊与住院人次数详情"
    },
    {
      "path": "/api/v1/hospital/high-hospital/hospitalSettlementMoney",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalSettlementMoney",
      "tag": "hospital-controller",
      "desc": "统筹结算金额统计"
    },
    {
      "path": "/api/v1/hospital/high-hospital/inTimeDistribution",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalInOutTimeDistribution",
      "tag": "hospital-controller",
      "desc": "入院时间分布"
    },
    {
      "path": "/api/v1/hospital/high-hospital/list",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalHighList",
      "tag": "hospital-controller",
      "desc": "高风险医院列表（近12个月）"
    },
    {
      "path": "/api/v1/hospital/high-hospital/map",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalHighAreaMap",
      "tag": "hospital-controller",
      "desc": "高风险医院地域分布(近12月)"
    },
    {
      "path": "/api/v1/hospital/high-hospital/outTimeDistribution",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalInOutTimeDistribution",
      "tag": "hospital-controller",
      "desc": "离院时间分布"
    },
    {
      "path": "/api/v1/hospital/high-hospital/proportion",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalRiskProportion",
      "tag": "hospital-controller",
      "desc": "各级医院风险事件占比(近12月)"
    },
    {
      "path": "/api/v1/hospital/high-hospital/riskEvent",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalRiskEvent",
      "tag": "hospital-controller",
      "desc": "近期风险提示列表"
    },
    {
      "path": "/api/v1/hospital/high-hospital/riskScan",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalRiskScan",
      "tag": "hospital-controller",
      "desc": "风险扫描"
    },
    {
      "path": "/api/v1/hospital/high-hospital/riskType",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalRiskType",
      "tag": "hospital-controller",
      "desc": "风险事件按风险类型(近12月)"
    },
    {
      "path": "/api/v1/hospital/high-hospital/riskTypeTime",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalRiskTypeTime",
      "tag": "hospital-controller",
      "desc": "风险事件数量走势（按事件类型）"
    },
    {
      "path": "/api/v1/hospital/high-hospital/scoreRadar",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalRiskType",
      "tag": "hospital-controller",
      "desc": "风险指数雷达"
    },
    {
      "path": "/api/v1/hospital/high-hospital/scoreTrend",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "org_code": {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalHighTrend",
      "tag": "hospital-controller",
      "desc": "风险指数走势"
    },
    {
      "path": "/api/v1/hospital/high-hospital/trend",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "HospitalHighTrend",
      "tag": "hospital-controller",
      "desc": "高风险医院数量走势"
    },
    {
      "path": "/api/v1/hospital/risk-event/history/class",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTypeInfo",
      "tag": "hospital-controller",
      "desc": "首页风险事件按类型分布(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/hospital/risk-event/history/org",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryOrgInfo",
      "tag": "hospital-controller",
      "desc": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/hospital/risk-event/history/time",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTimeInfo",
      "tag": "hospital-controller",
      "desc": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/hospital/risk-event/history/type",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTypeInfo",
      "tag": "hospital-controller",
      "desc": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)"
    }
  ],
  "hospital-controller-old": [
    {
      "path": "/api/v1/hospital/in-hospital/person-risk",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        },
        "hospital_code": {
          "name": "hospital_code",
          "in": "query",
          "description": "医院编码",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      },
      "model": "服务应答数据对象«Page«在院风险人员»»",
      "tag": "hospital-controller-old",
      "desc": "根据统筹区编码、医院编码查询在院风险人员列表，在医院详情页-经营行为风险进行分页展示"
    },
    {
      "path": "/api/v1/hospital/in-hospital/person-risk-history",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        },
        "hospital_code": {
          "name": "hospital_code",
          "in": "query",
          "description": "医院编码",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      },
      "model": "服务应答数据对象«Page«历史住院风险人员»»",
      "tag": "hospital-controller-old",
      "desc": "根据统筹区编码、医院编码查询历史住院风险人员列表，在医院详情页-经营行为风险进行分页展示"
    },
    {
      "path": "/api/v1/hospital/risk-detail/basic-info",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        },
        "hospital_code": {
          "name": "hospital_code",
          "in": "query",
          "description": "医院编码",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象«医院基本信息»",
      "tag": "hospital-controller-old",
      "desc": "根据统筹区编码、医院编码查询医院详细信息，在医院风险详情页面进行展示，包含经纬度信息"
    },
    {
      "path": "/api/v1/hospital/risk-detail/risk-events-page",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        },
        "hospital_code": {
          "name": "hospital_code",
          "in": "query",
          "description": "医院编码",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      },
      "model": "服务应答数据对象«Page«风险事件»»",
      "tag": "hospital-controller-old",
      "desc": "根据统筹区编码、医院编码查询医院得到风险时间列表，在医院风险详情页面进行分页展示"
    },
    {
      "path": "/api/v1/hospital/risk-detail/risk-score",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        },
        "hospital_code": {
          "name": "hospital_code",
          "in": "query",
          "description": "医院编码",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象«List«风险评分»»",
      "tag": "hospital-controller-old",
      "desc": "根据统筹区编码、医院编码查询医院得到风险评分，在医院风险详情页面进行展示，包含总分，每一项明细得分以及明细规则计算结果"
    },
    {
      "path": "/api/v1/hospital/risk-monitor/hospital-info-list",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象«List«医院基本信息»»",
      "tag": "hospital-controller-old",
      "desc": "根据统筹区编码查询高风险医院信息列表，在医院风险预警监测页面进行展示，包含经纬度信息"
    },
    {
      "path": "/api/v1/hospital/risk-monitor/hospital-info-page",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      },
      "model": "服务应答数据对象«Page«医院基本信息»»",
      "tag": "hospital-controller-old",
      "desc": "根据统筹区编码查询高风险医院信息列表，在医院风险预警监测页面进行分页展示"
    },
    {
      "path": "/api/v1/hospital/risk-monitor/hospital-risk-statistics",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象«风险统计»",
      "tag": "hospital-controller-old",
      "desc": "根据统筹区编码查询高风险医院统计信息"
    }
  ],
  "monitor-controller": [
    {
      "path": "/api/v1/monitor/person/business/upload",
      "type": "post",
      "parameter": {
        "personActionList": {
          "in": "body",
          "name": "personActionList",
          "description": "personActionList",
          "required": true,
          "schema": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/人员行为"
            }
          }
        }
      },
      "model": "服务应答数据对象",
      "tag": "monitor-controller",
      "desc": "上报监控人员行为"
    },
    {
      "path": "/api/v1/monitor/run",
      "type": "post",
      "parameter": {
        "area_code": {
          "name": "area_code",
          "in": "query",
          "description": "area_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象",
      "tag": "monitor-controller",
      "desc": "下发监控人员列表"
    }
  ],
  "person-controller": [
    {
      "path": "/api/v1/person/high-risk/age",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PersonHighRiskAgeInfo",
      "tag": "person-controller",
      "desc": "查询高风险人年龄分布"
    },
    {
      "path": "/api/v1/person/high-risk/list",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PersonHighRiskInfo",
      "tag": "person-controller",
      "desc": "查询高风险人员列表"
    },
    {
      "path": "/api/v1/person/high-risk/monitor",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PersonHighRiskMonitorInfo",
      "tag": "person-controller",
      "desc": "查询高风险人违规行为监控"
    },
    {
      "path": "/api/v1/person/high-risk/time",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PersonHighRiskTimeInfo",
      "tag": "person-controller",
      "desc": "查询高风险人违规行为时间分布"
    },
    {
      "path": "/api/v1/person/high-risk/type",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PersonHighRiskTypeInfo",
      "tag": "person-controller",
      "desc": "查询高风险人违规行为分类分布"
    },
    {
      "path": "/api/v1/person/info",
      "type": "get",
      "parameter": {
        "name": {
          "name": "name",
          "in": "query",
          "description": "name",
          "required": true,
          "type": "string"
        },
        "id_no": {
          "name": "id_no",
          "in": "query",
          "description": "id_no",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PersonInfo",
      "tag": "person-controller",
      "desc": "查询参保人详情(含风险指数)"
    },
    {
      "path": "/api/v1/person/risk-event/history/class",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTypeInfo",
      "tag": "person-controller",
      "desc": "首页风险事件按类型分布(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/person/risk-event/history/org",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryOrgInfo",
      "tag": "person-controller",
      "desc": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/person/risk-event/history/time",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTimeInfo",
      "tag": "person-controller",
      "desc": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/person/risk-event/history/type",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTypeInfo",
      "tag": "person-controller",
      "desc": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/person/risk/event",
      "type": "get",
      "parameter": {
        "name": {
          "name": "name",
          "in": "query",
          "description": "name",
          "required": true,
          "type": "string"
        },
        "id_no": {
          "name": "id_no",
          "in": "query",
          "description": "id_no",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PersonRiskEventInfo",
      "tag": "person-controller",
      "desc": "查询参保人风险事件列表"
    },
    {
      "path": "/api/v1/person/risk/radar",
      "type": "get",
      "parameter": {
        "name": {
          "name": "name",
          "in": "query",
          "description": "name",
          "required": true,
          "type": "string"
        },
        "id_no": {
          "name": "id_no",
          "in": "query",
          "description": "id_no",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PersonRiskRadarInfo",
      "tag": "person-controller",
      "desc": "查询参保人风险指数雷达"
    },
    {
      "path": "/api/v1/person/risk/trend",
      "type": "get",
      "parameter": {
        "name": {
          "name": "name",
          "in": "query",
          "description": "name",
          "required": true,
          "type": "string"
        },
        "id_no": {
          "name": "id_no",
          "in": "query",
          "description": "id_no",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PersonRiskScoreInfo",
      "tag": "person-controller",
      "desc": "查询参保人风险走势"
    },
    {
      "path": "/api/v1/person/risk/type",
      "type": "get",
      "parameter": {
        "name": {
          "name": "name",
          "in": "query",
          "description": "name",
          "required": true,
          "type": "string"
        },
        "id_no": {
          "name": "id_no",
          "in": "query",
          "description": "id_no",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PersonRiskTypeInfo",
      "tag": "person-controller",
      "desc": "查询参保人风险事件扫描"
    }
  ],
  "pharmacy-controller": [
    {
      "path": "/api/v1/pharmacy/high-pharmacy/baseInfo",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "code": {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyBaseInfo",
      "tag": "pharmacy-controller",
      "desc": "药店详情"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/drugsTop10",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "code": {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }
      },
      "model": "DrugsTop10",
      "tag": "pharmacy-controller",
      "desc": "药品销售top10"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/list",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyHighList",
      "tag": "pharmacy-controller",
      "desc": "高风险药店列表（近12个月）"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/map",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyHighAreaMap",
      "tag": "pharmacy-controller",
      "desc": "高风险药店地域分布"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/pharmacyTransactionList",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "code": {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyTransactionList",
      "tag": "pharmacy-controller",
      "desc": "本日交易列表"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/pharmacyTransactionListHistory",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "code": {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      },
      "model": "PharmacyTransactionList",
      "tag": "pharmacy-controller",
      "desc": "历史交易列表"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/proportion",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyRiskProportion",
      "tag": "pharmacy-controller",
      "desc": "各级药店风险事件占比(近12月)"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/riskEvent",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "code": {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyRiskEvent",
      "tag": "pharmacy-controller",
      "desc": "近期风险提示列表"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/riskScan",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "code": {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyRiskScan",
      "tag": "pharmacy-controller",
      "desc": "风险扫描"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/riskType",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyRiskType",
      "tag": "pharmacy-controller",
      "desc": "风险事件按风险类型(近12月)"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/riskTypeTime",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyRiskTypeTime",
      "tag": "pharmacy-controller",
      "desc": "风险事件数量走势（按事件类型）"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/scoreRadar",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "code": {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyRiskType",
      "tag": "pharmacy-controller",
      "desc": "风险指数雷达"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/scoreTrend",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "code": {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyHighTrend",
      "tag": "pharmacy-controller",
      "desc": "风险指数走势"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/transactionAgeDistribution",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "code": {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }
      },
      "model": "TransactionAgeDistribution",
      "tag": "pharmacy-controller",
      "desc": "购药年龄分布"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/transactionNumDistribution",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "code": {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }
      },
      "model": "TransactionNumDistribution",
      "tag": "pharmacy-controller",
      "desc": "交易次数按时间分布"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/transactionPharmacyDistribution",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        },
        "code": {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }
      },
      "model": "TransactionPharmacyDistribution",
      "tag": "pharmacy-controller",
      "desc": "附近3家药店交易次数走势分布"
    },
    {
      "path": "/api/v1/pharmacy/high-pharmacy/trend",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "PharmacyHighTrend",
      "tag": "pharmacy-controller",
      "desc": "高风险药店数量走势"
    },
    {
      "path": "/api/v1/pharmacy/risk-event/history/class",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTypeInfo",
      "tag": "pharmacy-controller",
      "desc": "首页风险事件按类型分布(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/pharmacy/risk-event/history/org",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryOrgInfo",
      "tag": "pharmacy-controller",
      "desc": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/pharmacy/risk-event/history/time",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTimeInfo",
      "tag": "pharmacy-controller",
      "desc": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)"
    },
    {
      "path": "/api/v1/pharmacy/risk-event/history/type",
      "type": "get",
      "parameter": {
        "type": {
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "RiskEventHistoryTypeInfo",
      "tag": "pharmacy-controller",
      "desc": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)"
    }
  ],
  "pharmacy-controller-old": [
    {
      "path": "/api/v1/pharmacy/risk-detail/basic-info",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        },
        "pharmacy_code": {
          "name": "pharmacy_code",
          "in": "query",
          "description": "药店编码",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象«药店基本信息»",
      "tag": "pharmacy-controller-old",
      "desc": "根据统筹区编码、药店编码查询药店详细信息，在药店风险详情页面进行展示，包含经纬度信息"
    },
    {
      "path": "/api/v1/pharmacy/risk-detail/risk-events-page",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        },
        "pharmacy_code": {
          "name": "pharmacy_code",
          "in": "query",
          "description": "药店编码",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      },
      "model": "服务应答数据对象«Page«风险事件»»",
      "tag": "pharmacy-controller-old",
      "desc": "根据统筹区编码、药店编码查询药店得到风险时间列表，在药店风险详情页面进行分页展示"
    },
    {
      "path": "/api/v1/pharmacy/risk-detail/risk-score",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        },
        "pharmacy_code": {
          "name": "pharmacy_code",
          "in": "query",
          "description": "药店编码",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象«List«风险评分»»",
      "tag": "pharmacy-controller-old",
      "desc": "根据统筹区编码、药店编码查询药店得到风险评分，在药店风险详情页面进行展示，包含总分，每一项明细得分以及明细规则计算结果"
    },
    {
      "path": "/api/v1/pharmacy/risk-monitor/pharmacy-info-list",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象«List«药店基本信息»»",
      "tag": "pharmacy-controller-old",
      "desc": "根据统筹区编码查询高风险药店信息列表，在药店风险预警监测页面进行展示，包含经纬度信息"
    },
    {
      "path": "/api/v1/pharmacy/risk-monitor/pharmacy-info-page",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        },
        "page": {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        "size": {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      },
      "model": "服务应答数据对象«Page«药店基本信息»»",
      "tag": "pharmacy-controller-old",
      "desc": "根据统筹区编码查询高风险药店信息列表，在药店风险预警监测页面进行分页展示"
    },
    {
      "path": "/api/v1/pharmacy/risk-monitor/pharmacy-risk-statistics",
      "type": "get",
      "parameter": {
        "city_code": {
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象«风险统计»",
      "tag": "pharmacy-controller-old",
      "desc": "根据统筹区编码查询高风险药店统计信息"
    }
  ],
  "rule-controller": [
    {
      "path": "/api/v1/rule/fence-person/update",
      "type": "post",
      "parameter": {
        "area_code": {
          "name": "area_code",
          "in": "query",
          "description": "area_code",
          "required": true,
          "type": "string"
        },
        "scanner_code": {
          "name": "scanner_code",
          "in": "query",
          "description": "scanner_code",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象",
      "tag": "rule-controller",
      "desc": "更新电子围栏人员信息"
    },
    {
      "path": "/api/v1/rule/run",
      "type": "post",
      "parameter": {},
      "model": "服务应答数据对象",
      "tag": "rule-controller",
      "desc": "下发规则执行任务"
    }
  ],
  "scanner-controller": [
    {
      "path": "/api/v1/scanner/register",
      "type": "post",
      "parameter": {
        "scannerRegisterInfo": {
          "in": "body",
          "name": "scannerRegisterInfo",
          "description": "scannerRegisterInfo",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ScannerRegisterInfo"
          }
        }
      },
      "model": "服务应答数据对象",
      "tag": "scanner-controller",
      "desc": "注册scanner"
    },
    {
      "path": "/api/v1/scanner/risk-event/report",
      "type": "post",
      "parameter": {
        "riskEventInfoList": {
          "in": "body",
          "name": "riskEventInfoList",
          "description": "riskEventInfoList",
          "required": true,
          "schema": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/RiskEventInfo"
            }
          }
        }
      },
      "model": "服务应答数据对象",
      "tag": "scanner-controller",
      "desc": "上报风险事件"
    },
    {
      "path": "/api/v1/scanner/rule/result/upload",
      "type": "post",
      "parameter": {
        "ruleRunResult": {
          "in": "body",
          "name": "ruleRunResult",
          "description": "ruleRunResult",
          "required": true,
          "schema": {
            "$ref": "#/definitions/RuleRunResult"
          }
        }
      },
      "model": "服务应答数据对象",
      "tag": "scanner-controller",
      "desc": "上传任务执行结果"
    }
  ],
  "login-controller": [
    {
      "path": "/api/v1/user/captcha",
      "type": "get",
      "parameter": {},
      "model": "服务应答数据对象",
      "tag": "login-controller",
      "desc": "获取验证码"
    },
    {
      "path": "/api/v1/user/currentUser",
      "type": "get",
      "parameter": {},
      "model": "服务应答数据对象",
      "tag": "login-controller",
      "desc": "获取当前用户"
    },
    {
      "path": "/api/v1/user/login",
      "type": "get",
      "parameter": {
        "userName": {
          "name": "userName",
          "in": "query",
          "description": "userName",
          "required": true,
          "type": "string"
        },
        "password": {
          "name": "password",
          "in": "query",
          "description": "password",
          "required": true,
          "type": "string"
        },
        "cToken": {
          "name": "cToken",
          "in": "query",
          "description": "cToken",
          "required": true,
          "type": "string"
        },
        "captcha": {
          "name": "captcha",
          "in": "query",
          "description": "captcha",
          "required": true,
          "type": "string"
        }
      },
      "model": "服务应答数据对象",
      "tag": "login-controller",
      "desc": "用户登录"
    },
    {
      "path": "/api/v1/user/register",
      "type": "post",
      "parameter": {
        "id": {
          "name": "id",
          "in": "query",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        "createUser": {
          "name": "createUser",
          "in": "query",
          "required": false,
          "type": "string"
        },
        "updateUser": {
          "name": "updateUser",
          "in": "query",
          "required": false,
          "type": "string"
        },
        "createTime": {
          "name": "createTime",
          "in": "query",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        "updateTime": {
          "name": "updateTime",
          "in": "query",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        "roleCode": {
          "name": "roleCode",
          "in": "query",
          "required": false,
          "type": "string"
        },
        "realName": {
          "name": "realName",
          "in": "query",
          "required": false,
          "type": "string"
        },
        "userName": {
          "name": "userName",
          "in": "query",
          "required": false,
          "type": "string"
        },
        "password": {
          "name": "password",
          "in": "query",
          "required": false,
          "type": "string"
        },
        "telphone": {
          "name": "telphone",
          "in": "query",
          "required": false,
          "type": "string"
        },
        "userLevel": {
          "name": "userLevel",
          "in": "query",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        "createType": {
          "name": "createType",
          "in": "query",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        "updateType": {
          "name": "updateType",
          "in": "query",
          "required": false,
          "type": "integer",
          "format": "int32"
        }
      },
      "model": "服务应答数据对象",
      "tag": "login-controller",
      "desc": "用户注册"
    }
  ]
};
