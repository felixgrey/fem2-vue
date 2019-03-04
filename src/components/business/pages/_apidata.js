export default {
  "swagger": "2.0",
  "info": {
    "description": "医保防欺诈预警服务",
    "title": "SiAntiFraud API"
  },
  "host": "localhost:8080",
  "basePath": "/",
  "tags": [{
    "name": "common-controller",
    "description": "Common Controller"
  }, {
    "name": "doctor-controller",
    "description": "Doctor Controller"
  }, {
    "name": "hospital-controller",
    "description": "Hospital Controller"
  }, {
    "name": "hospital-controller-old",
    "description": "Hospital Controller Old"
  }, {
    "name": "login-controller",
    "description": "Login Controller"
  }, {
    "name": "person-controller",
    "description": "Person Controller"
  }, {
    "name": "pharmacy-controller",
    "description": "Pharmacy Controller"
  }, {
    "name": "pharmacy-controller-old",
    "description": "Pharmacy Controller Old"
  }, {
    "name": "rule-controller",
    "description": "Rule Controller"
  }, {
    "name": "scanner-controller",
    "description": "Scanner Controller"
  }],
  "produces": ["application/json"],
  "paths": {
    "/api/v1/common/cities": {
      "get": {
        "tags": ["common-controller"],
        "summary": "查询支持的城市列表",
        "description": "查询支持的城市列表",
        "operationId": "queryCityListUsingGET",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/CityInfo"
            }
          }
        }
      }
    },
    "/api/v1/common/date": {
      "get": {
        "tags": ["common-controller"],
        "summary": "queryDate",
        "operationId": "queryDateUsingGET",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象"
            }
          }
        }
      }
    },
    "/api/v1/common/init/data": {
      "get": {
        "tags": ["common-controller"],
        "summary": "initData",
        "operationId": "initDataUsingGET",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象"
            }
          }
        }
      }
    },
    "/api/v1/common/risk-event/detail": {
      "get": {
        "tags": ["common-controller"],
        "summary": "首页实时风险事件列表",
        "description": "首页实时风险事件列表",
        "operationId": "queryRiskEventEventDetailListUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventDetail"
            }
          }
        }
      }
    },
    "/api/v1/common/risk-event/num": {
      "get": {
        "tags": ["common-controller"],
        "summary": "首页实时风险事件雷达预警",
        "description": "首页实时风险事件雷达预警",
        "operationId": "queryRiskEventNumUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventNum"
            }
          }
        }
      }
    },
    "/api/v1/common/risk-event/org/location": {
      "get": {
        "tags": ["common-controller"],
        "summary": "首页实时风险事件雷达预警坐标",
        "description": "首页实时风险事件雷达预警坐标",
        "operationId": "queryRiskEventLocationUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventOrgLocation"
            }
          }
        }
      }
    },
    "/api/v1/common/risk-event/time": {
      "get": {
        "tags": ["common-controller"],
        "summary": "首页本日医院风险事件趋势",
        "description": "首页本日医院风险事件趋势",
        "operationId": "queryRiskEventTimeInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventTime"
            }
          }
        }
      }
    },
    "/api/v1/common/risk-event/type": {
      "get": {
        "tags": ["common-controller"],
        "summary": "首页本日风险事件明细",
        "description": "首页本日风险事件明细",
        "operationId": "queryRiskEventTypeUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventType"
            }
          }
        }
      }
    },
    "/api/v1/doctor/base/info": {
      "get": {
        "tags": ["doctor-controller"],
        "summary": "医师基础信息查询",
        "description": "医师基础信息查询",
        "operationId": "queryDoctorBaseInfoUsingGET",
        "parameters": [{
          "name": "id_code",
          "in": "query",
          "description": "id_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/DoctorBaseInfo"
            }
          }
        }
      }
    },
    "/api/v1/doctor/high-risk/count": {
      "get": {
        "tags": ["doctor-controller"],
        "summary": "医师规范行为统计",
        "description": "医师规范行为统计",
        "operationId": "queryHighRiskCountUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/DoctorHighRiskCount"
            }
          }
        }
      }
    },
    "/api/v1/doctor/high-risk/distribution": {
      "get": {
        "tags": ["doctor-controller"],
        "summary": "高风险医师违规行为分布",
        "description": "高风险医师违规行为分布",
        "operationId": "queryHighRiskDistributionUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/DoctorHighRiskDistribution"
            }
          }
        }
      }
    },
    "/api/v1/doctor/high-risk/hospital": {
      "get": {
        "tags": ["doctor-controller"],
        "summary": "高风险医师按医院分布",
        "description": "高风险医师按医院分布",
        "operationId": "queryHighRiskByHospitalUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/DoctorHighRiskHospital"
            }
          }
        }
      }
    },
    "/api/v1/doctor/high-risk/list": {
      "get": {
        "tags": ["doctor-controller"],
        "summary": "高风险医师列表（近一个月）",
        "description": "高风险医师列表（近一个月）",
        "operationId": "queryHighRiskPersonListInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/DoctorHighRiskInfo"
            }
          }
        }
      }
    },
    "/api/v1/doctor/high-risk/monitor": {
      "get": {
        "tags": ["doctor-controller"],
        "summary": "高风险医师近期医保行为监控",
        "description": "高风险医师近期医保行为监控",
        "operationId": "queryHighRiskMonitorInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/DoctorHighRiskMonitorInfo"
            }
          }
        }
      }
    },
    "/api/v1/doctor/risk-event/history/org": {
      "get": {
        "tags": ["doctor-controller"],
        "summary": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryOrgInfoUsingGET",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryOrgInfo"
            }
          }
        }
      }
    },
    "/api/v1/doctor/risk-event/history/time": {
      "get": {
        "tags": ["doctor-controller"],
        "summary": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryTimeInfoUsingGET",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryTimeInfo"
            }
          }
        }
      }
    },
    "/api/v1/doctor/risk-event/history/type": {
      "get": {
        "tags": ["doctor-controller"],
        "summary": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryTypeInfoUsingGET",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryTypeInfo"
            }
          }
        }
      }
    },
    "/api/v1/doctor/risk/score": {
      "get": {
        "tags": ["doctor-controller"],
        "summary": "风险指数走势",
        "description": "风险指数走势",
        "operationId": "queryRiskScoreUsingGET",
        "parameters": [{
          "name": "id_code",
          "in": "query",
          "description": "id_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/DoctorBaseInfo"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/ageDistribution": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "住院人年龄分布",
        "description": "住院人年龄分布",
        "operationId": "queryHospitalAgeDistributionUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalInAgeDistribution"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/baseInfo": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "医院详情",
        "description": "医院详情",
        "operationId": "queryHospitalHighBaseInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalBaseInfo"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/bedRatio": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "床位利用率",
        "description": "床位利用率",
        "operationId": "queryHospitalHighBedRatioUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalHighTrend"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/hospitalHospitalization": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "本日住院",
        "description": "本日住院",
        "operationId": "queryHospitalHospitalizationUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }, {
          "name": "risk_type",
          "in": "query",
          "description": "risk_type",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalHospitalization"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/hospitalHospitalizationHistory": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "历史住院",
        "description": "历史住院",
        "operationId": "queryHospitalHospitalizationHistoryUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }, {
          "name": "risk_type",
          "in": "query",
          "description": "risk_type",
          "required": true,
          "type": "string"
        }, {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        }, {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalHospitalization"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/hospitalOutpatient": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "本日门/急诊",
        "description": "本日门/急诊",
        "operationId": "queryHospitalOutpatientUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }, {
          "name": "risk_type",
          "in": "query",
          "description": "risk_type",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalOutpatient"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/hospitalOutpatientHistory": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "历史门/急诊",
        "description": "历史门/急诊",
        "operationId": "queryHospitalOutpatientHistoryUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }, {
          "name": "risk_type",
          "in": "query",
          "description": "risk_type",
          "required": true,
          "type": "string"
        }, {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        }, {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalOutpatient"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/hospitalPersonTimeStatistics": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "门/急诊与住院人次数详情",
        "description": "门/急诊与住院人次数详情",
        "operationId": "queryHospitalPersonTimeStatisticsUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalPersonTimeStatistics"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/hospitalSettlementMoney": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "统筹结算金额统计",
        "description": "统筹结算金额统计",
        "operationId": "queryHospitalSettlementMoneyUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalSettlementMoney"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/inTimeDistribution": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "入院时间分布",
        "description": "入院时间分布",
        "operationId": "queryHospitalInTimeDistributionUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalInOutTimeDistribution"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/list": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "高风险医院列表（近12个月）",
        "description": "高风险医院列表（近12个月）",
        "operationId": "queryHospitalHighListUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalHighList"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/map": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "高风险医院地域分布(近12月)",
        "description": "高风险医院地域分布(近12月)",
        "operationId": "queryHospitalHighAreaMapUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalHighAreaMap"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/outTimeDistribution": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "离院时间分布",
        "description": "离院时间分布",
        "operationId": "queryHospitalOutTimeDistributionUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalInOutTimeDistribution"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/proportion": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "各级医院风险事件占比(近12月)",
        "description": "各级医院风险事件占比(近12月)",
        "operationId": "queryHospitalProportionUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalRiskProportion"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/riskEvent": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "近期风险提示列表",
        "description": "近期风险提示列表",
        "operationId": "queryHospitalHospitalRiskEventUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalRiskEvent"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/riskScan": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "风险扫描",
        "description": "风险扫描",
        "operationId": "queryHospitalHospitalRiskScanUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalRiskScan"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/riskType": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "风险事件按风险类型(近12月)",
        "description": "风险事件按风险类型(近12月)",
        "operationId": "queryHospitalRiskTypeUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalRiskType"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/riskTypeTime": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "风险事件数量走势（按事件类型）",
        "description": "风险事件数量走势（按事件类型）",
        "operationId": "queryHospitalRiskTypeTimeUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalRiskTypeTime"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/scoreRadar": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "风险指数雷达",
        "description": "风险指数雷达",
        "operationId": "queryHospitalHighScoreRadarUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalRiskType"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/scoreTrend": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "风险指数走势",
        "description": "风险指数走势",
        "operationId": "queryHospitalHighScoreTrendUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "org_code",
          "in": "query",
          "description": "org_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalHighTrend"
            }
          }
        }
      }
    },
    "/api/v1/hospital/high-hospital/trend": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "高风险医院数量走势",
        "description": "高风险医院数量走势",
        "operationId": "queryHospitalHighTrendUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/HospitalHighTrend"
            }
          }
        }
      }
    },
    "/api/v1/hospital/in-hospital/person-risk": {
      "get": {
        "tags": ["hospital-controller-old"],
        "summary": "分页查询当前在院风险人员列表（医院详情页-经营行为风险）",
        "description": "根据统筹区编码、医院编码查询在院风险人员列表，在医院详情页-经营行为风险进行分页展示",
        "operationId": "getInHospitalPersonRiskUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }, {
          "name": "hospital_code",
          "in": "query",
          "description": "医院编码",
          "required": true,
          "type": "string"
        }, {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        }, {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«Page«在院风险人员»»"
            }
          }
        }
      }
    },
    "/api/v1/hospital/in-hospital/person-risk-history": {
      "get": {
        "tags": ["hospital-controller-old"],
        "summary": "分页查询历史住院风险人员列表（医院详情页-经营行为风险）",
        "description": "根据统筹区编码、医院编码查询历史住院风险人员列表，在医院详情页-经营行为风险进行分页展示",
        "operationId": "getInHospitalPersonRiskHistoryUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }, {
          "name": "hospital_code",
          "in": "query",
          "description": "医院编码",
          "required": true,
          "type": "string"
        }, {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        }, {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«Page«历史住院风险人员»»"
            }
          }
        }
      }
    },
    "/api/v1/hospital/risk-detail/basic-info": {
      "get": {
        "tags": ["hospital-controller-old"],
        "summary": "查询医院详细信息（医院风险详情页面）",
        "description": "根据统筹区编码、医院编码查询医院详细信息，在医院风险详情页面进行展示，包含经纬度信息",
        "operationId": "getHospitalInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }, {
          "name": "hospital_code",
          "in": "query",
          "description": "医院编码",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«医院基本信息»"
            }
          }
        }
      }
    },
    "/api/v1/hospital/risk-detail/risk-events-page": {
      "get": {
        "tags": ["hospital-controller-old"],
        "summary": "分页查询医院风险时间列表（医院风险详情页面）",
        "description": "根据统筹区编码、医院编码查询医院得到风险时间列表，在医院风险详情页面进行分页展示",
        "operationId": "getRiskEventsByPageUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }, {
          "name": "hospital_code",
          "in": "query",
          "description": "医院编码",
          "required": true,
          "type": "string"
        }, {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        }, {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«Page«风险事件»»"
            }
          }
        }
      }
    },
    "/api/v1/hospital/risk-detail/risk-score": {
      "get": {
        "tags": ["hospital-controller-old"],
        "summary": "查询医院风险评分（医院风险详情页面）",
        "description": "根据统筹区编码、医院编码查询医院得到风险评分，在医院风险详情页面进行展示，包含总分，每一项明细得分以及明细规则计算结果",
        "operationId": "getRiskScoreUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }, {
          "name": "hospital_code",
          "in": "query",
          "description": "医院编码",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«List«风险评分»»"
            }
          }
        }
      }
    },
    "/api/v1/hospital/risk-event/history/org": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryOrgInfoUsingGET_1",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryOrgInfo"
            }
          }
        }
      }
    },
    "/api/v1/hospital/risk-event/history/time": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryTimeInfoUsingGET_1",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryTimeInfo"
            }
          }
        }
      }
    },
    "/api/v1/hospital/risk-event/history/type": {
      "get": {
        "tags": ["hospital-controller"],
        "summary": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryTypeInfoUsingGET_1",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryTypeInfo"
            }
          }
        }
      }
    },
    "/api/v1/hospital/risk-monitor/hospital-info-list": {
      "get": {
        "tags": ["hospital-controller-old"],
        "summary": "查询高风险医院信息（医院风险预警监测页面）地图展示",
        "description": "根据统筹区编码查询高风险医院信息列表，在医院风险预警监测页面进行展示，包含经纬度信息",
        "operationId": "getHighRiskHospitalListUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«List«医院基本信息»»"
            }
          }
        }
      }
    },
    "/api/v1/hospital/risk-monitor/hospital-info-page": {
      "get": {
        "tags": ["hospital-controller-old"],
        "summary": "查询高风险医院信息（医院风险预警监测页面）分页展示统计结果",
        "description": "根据统筹区编码查询高风险医院信息列表，在医院风险预警监测页面进行分页展示",
        "operationId": "getHighRiskHospitalByPageUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }, {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        }, {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«Page«医院基本信息»»"
            }
          }
        }
      }
    },
    "/api/v1/hospital/risk-monitor/hospital-risk-statistics": {
      "get": {
        "tags": ["hospital-controller-old"],
        "summary": "查询高风险医院风险统计信息（医院风险预警监测页面）",
        "description": "根据统筹区编码查询高风险医院统计信息",
        "operationId": "getHospitalRiskStatisticsUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«风险统计»"
            }
          }
        }
      }
    },
    "/api/v1/person/high-risk/age": {
      "get": {
        "tags": ["person-controller"],
        "summary": "查询高风险人年龄分布",
        "description": "查询高风险人年龄分布",
        "operationId": "queryHighRiskAgeInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PersonHighRiskAgeInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/high-risk/list": {
      "get": {
        "tags": ["person-controller"],
        "summary": "查询高风险人员列表",
        "description": "查询高风险人员列表",
        "operationId": "PersonHighRiskPersonListInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PersonHighRiskInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/high-risk/monitor": {
      "get": {
        "tags": ["person-controller"],
        "summary": "查询高风险人违规行为监控",
        "description": "查询高风险人违规行为监控",
        "operationId": "PersonHighRiskMonitorInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PersonHighRiskMonitorInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/high-risk/time": {
      "get": {
        "tags": ["person-controller"],
        "summary": "查询高风险人违规行为时间分布",
        "description": "查询高风险人违规行为时间分布",
        "operationId": "queryHighRiskTimeInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PersonHighRiskTimeInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/high-risk/type": {
      "get": {
        "tags": ["person-controller"],
        "summary": "查询高风险人违规行为分类分布",
        "description": "查询高风险人违规行为分类分布",
        "operationId": "queryHighRiskTypeInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PersonHighRiskTypeInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/info": {
      "get": {
        "tags": ["person-controller"],
        "summary": "查询参保人详情",
        "description": "查询参保人详情(含风险指数)",
        "operationId": "queryPersonInfoUsingGET",
        "parameters": [{
          "name": "name",
          "in": "query",
          "description": "name",
          "required": true,
          "type": "string"
        }, {
          "name": "id_no",
          "in": "query",
          "description": "id_no",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PersonInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/risk-event/history/org": {
      "get": {
        "tags": ["person-controller"],
        "summary": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryOrgInfoUsingGET_2",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryOrgInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/risk-event/history/time": {
      "get": {
        "tags": ["person-controller"],
        "summary": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryTimeInfoUsingGET_2",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryTimeInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/risk-event/history/type": {
      "get": {
        "tags": ["person-controller"],
        "summary": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryTypeInfoUsingGET_2",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryTypeInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/risk/event": {
      "get": {
        "tags": ["person-controller"],
        "summary": "查询参保人风险事件列表",
        "description": "查询参保人风险事件列表",
        "operationId": "queryRiskEventInfoUsingGET",
        "parameters": [{
          "name": "name",
          "in": "query",
          "description": "name",
          "required": true,
          "type": "string"
        }, {
          "name": "id_no",
          "in": "query",
          "description": "id_no",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PersonRiskEventInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/risk/radar": {
      "get": {
        "tags": ["person-controller"],
        "summary": "查询参保人风险指数雷达",
        "description": "查询参保人风险指数雷达",
        "operationId": "queryRiskRadarInfoUsingGET",
        "parameters": [{
          "name": "name",
          "in": "query",
          "description": "name",
          "required": true,
          "type": "string"
        }, {
          "name": "id_no",
          "in": "query",
          "description": "id_no",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PersonRiskRadarInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/risk/trend": {
      "get": {
        "tags": ["person-controller"],
        "summary": "查询参保人风险走势",
        "description": "查询参保人风险走势",
        "operationId": "queryRiskTrendInfoUsingGET",
        "parameters": [{
          "name": "name",
          "in": "query",
          "description": "name",
          "required": true,
          "type": "string"
        }, {
          "name": "id_no",
          "in": "query",
          "description": "id_no",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PersonRiskScoreInfo"
            }
          }
        }
      }
    },
    "/api/v1/person/risk/type": {
      "get": {
        "tags": ["person-controller"],
        "summary": "查询参保人风险事件扫描",
        "description": "查询参保人风险事件扫描",
        "operationId": "queryRiskTypeInfoUsingGET",
        "parameters": [{
          "name": "name",
          "in": "query",
          "description": "name",
          "required": true,
          "type": "string"
        }, {
          "name": "id_no",
          "in": "query",
          "description": "id_no",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PersonRiskTypeInfo"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/baseInfo": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "药店详情",
        "description": "药店详情",
        "operationId": "queryPharmacyBaseInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyBaseInfo"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/drugsTop10": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "药品销售top10",
        "description": "药品销售top10",
        "operationId": "queryDrugsTop10UsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/DrugsTop10"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/eventType": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "风险事件数量走势（按事件类型）",
        "description": "风险事件数量走势（按事件类型）",
        "operationId": "queryPharmacyHighEventTypeUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyRiskType"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/list": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "高风险药店列表（近12个月）",
        "description": "高风险药店列表（近12个月）",
        "operationId": "queryPharmacyHighListUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyHighList"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/map": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "高风险药店地域分布",
        "description": "高风险药店地域分布",
        "operationId": "queryPharmacyHighAreaMapUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyHighAreaMap"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/pharmacyTransactionList": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "本日交易列表",
        "description": "本日交易列表",
        "operationId": "queryPharmacyTransactionListUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyTransactionList"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/pharmacyTransactionListHistory": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "历史交易列表",
        "description": "历史交易列表",
        "operationId": "queryPharmacyTransactionListHistoryUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }, {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        }, {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyTransactionList"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/proportion": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "各级药店风险事件占比(近12月)",
        "description": "各级药店风险事件占比(近12月)",
        "operationId": "queryPharmacyRiskProportionUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyRiskProportion"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/riskEvent": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "近期风险提示列表",
        "description": "近期风险提示列表",
        "operationId": "queryPharmacyRiskEventUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyRiskEvent"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/riskScan": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "风险扫描",
        "description": "风险扫描",
        "operationId": "queryPharmacyRiskScanUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyRiskScan"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/riskType": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "风险事件按风险类型(近12月)",
        "description": "风险事件按风险类型(近12月)",
        "operationId": "queryPharmacyRiskTypeUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyRiskType"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/scoreRadar": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "风险指数雷达",
        "description": "风险指数雷达",
        "operationId": "queryPharmacyHighScoreRadarUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyRiskType"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/scoreTrend": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "风险指数走势",
        "description": "风险指数走势",
        "operationId": "queryPharmacyHighScoreTrendUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyHighTrend"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/transactionAgeDistribution": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "购药年龄分布",
        "description": "购药年龄分布",
        "operationId": "queryTransactionAgeDistributionUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/TransactionAgeDistribution"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/transactionNumDistribution": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "交易次数按时间分布",
        "description": "交易次数按时间分布",
        "operationId": "queryTransactionNumDistributionUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/TransactionNumDistribution"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/transactionPharmacyDistribution": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "附近3家药店交易次数走势分布",
        "description": "附近3家药店交易次数走势分布",
        "operationId": "queryTransactionPharmacyDistributionUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }, {
          "name": "code",
          "in": "query",
          "description": "code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/TransactionPharmacyDistribution"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/high-pharmacy/trend": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "高风险药店数量走势",
        "description": "高风险药店数量走势",
        "operationId": "queryPharmacyHighTrendUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PharmacyHighTrend"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/risk-detail/basic-info": {
      "get": {
        "tags": ["pharmacy-controller-old"],
        "summary": "查询药店详细信息（药店风险详情页面）",
        "description": "根据统筹区编码、药店编码查询药店详细信息，在药店风险详情页面进行展示，包含经纬度信息",
        "operationId": "getPharmacyInfoUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }, {
          "name": "pharmacy_code",
          "in": "query",
          "description": "药店编码",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«药店基本信息»"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/risk-detail/risk-events-page": {
      "get": {
        "tags": ["pharmacy-controller-old"],
        "summary": "分页查询药店风险时间列表（药店风险详情页面）",
        "description": "根据统筹区编码、药店编码查询药店得到风险时间列表，在药店风险详情页面进行分页展示",
        "operationId": "getRiskEventsByPageUsingGET_1",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }, {
          "name": "pharmacy_code",
          "in": "query",
          "description": "药店编码",
          "required": true,
          "type": "string"
        }, {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        }, {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«Page«风险事件»»"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/risk-detail/risk-score": {
      "get": {
        "tags": ["pharmacy-controller-old"],
        "summary": "查询药店风险评分（药店风险详情页面）",
        "description": "根据统筹区编码、药店编码查询药店得到风险评分，在药店风险详情页面进行展示，包含总分，每一项明细得分以及明细规则计算结果",
        "operationId": "getRiskScoreUsingGET_1",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }, {
          "name": "pharmacy_code",
          "in": "query",
          "description": "药店编码",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«List«风险评分»»"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/risk-event/history/org": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件医疗机构列表(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryOrgInfoUsingGET_3",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryOrgInfo"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/risk-event/history/time": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件趋势(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryTimeInfoUsingGET_3",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryTimeInfo"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/risk-event/history/type": {
      "get": {
        "tags": ["pharmacy-controller"],
        "summary": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)",
        "description": "首页风险事件统计列表(1-近7天，2-近30天，3-近12月)",
        "operationId": "queryEventHistoryTypeInfoUsingGET_3",
        "parameters": [{
          "name": "type",
          "in": "query",
          "description": "type",
          "required": true,
          "type": "string"
        }, {
          "name": "city_code",
          "in": "query",
          "description": "city_code",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/RiskEventHistoryTypeInfo"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/risk-monitor/pharmacy-info-list": {
      "get": {
        "tags": ["pharmacy-controller-old"],
        "summary": "查询高风险药店信息（药店风险预警监测页面）地图展示",
        "description": "根据统筹区编码查询高风险药店信息列表，在药店风险预警监测页面进行展示，包含经纬度信息",
        "operationId": "getHighRiskPharmacyListUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«List«药店基本信息»»"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/risk-monitor/pharmacy-info-page": {
      "get": {
        "tags": ["pharmacy-controller-old"],
        "summary": "查询高风险药店信息（药店风险预警监测页面）分页展示统计结果",
        "description": "根据统筹区编码查询高风险药店信息列表，在药店风险预警监测页面进行分页展示",
        "operationId": "getHighRiskPharmacyByPageUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }, {
          "name": "page",
          "in": "query",
          "description": "显示页码",
          "required": true,
          "type": "integer",
          "format": "int32"
        }, {
          "name": "size",
          "in": "query",
          "description": "每页显示条数",
          "required": true,
          "type": "integer",
          "format": "int32"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«Page«药店基本信息»»"
            }
          }
        }
      }
    },
    "/api/v1/pharmacy/risk-monitor/pharmacy-risk-statistics": {
      "get": {
        "tags": ["pharmacy-controller-old"],
        "summary": "查询高风险药店风险统计信息（药店风险预警监测页面）",
        "description": "根据统筹区编码查询高风险药店统计信息",
        "operationId": "getPharmacyRiskStatisticsUsingGET",
        "parameters": [{
          "name": "city_code",
          "in": "query",
          "description": "统筹区编码",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象«风险统计»"
            }
          }
        }
      }
    },
    "/api/v1/rule/run": {
      "post": {
        "tags": ["rule-controller"],
        "summary": "下发规则执行任务",
        "description": "下发规则执行任务",
        "operationId": "runRulesUsingPOST",
        "consumes": ["application/json"],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象"
            }
          }
        }
      }
    },
    "/api/v1/scanner/register": {
      "post": {
        "tags": ["scanner-controller"],
        "summary": "注册scanner",
        "description": "注册scanner",
        "operationId": "registerUsingPOST_1",
        "consumes": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "scannerRegisterInfo",
          "description": "scannerRegisterInfo",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ScannerRegisterInfo"
          }
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象"
            }
          }
        }
      }
    },
    "/api/v1/scanner/risk-event/report": {
      "post": {
        "tags": ["scanner-controller"],
        "summary": "上报风险事件",
        "description": "上报风险事件",
        "operationId": "reportRiskEventsUsingPOST",
        "consumes": ["application/json"],
        "parameters": [{
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
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象"
            }
          }
        }
      }
    },
    "/api/v1/scanner/rule/result/upload": {
      "post": {
        "tags": ["scanner-controller"],
        "summary": "上传任务执行结果",
        "description": "上传任务执行结果",
        "operationId": "uploadRuleRunResultUsingPOST",
        "consumes": ["application/json"],
        "parameters": [{
          "in": "body",
          "name": "ruleRunResult",
          "description": "ruleRunResult",
          "required": true,
          "schema": {
            "$ref": "#/definitions/RuleRunResult"
          }
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象"
            }
          }
        }
      }
    },
    "/api/v1/user/captcha": {
      "get": {
        "tags": ["login-controller"],
        "summary": "获取验证码",
        "description": "获取验证码",
        "operationId": "captchaUsingGET",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象"
            }
          }
        }
      }
    },
    "/api/v1/user/currentUser": {
      "get": {
        "tags": ["login-controller"],
        "summary": "获取当前用户",
        "description": "获取当前用户",
        "operationId": "currentUserUsingGET",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象"
            }
          }
        }
      }
    },
    "/api/v1/user/login": {
      "get": {
        "tags": ["login-controller"],
        "summary": "用户登录",
        "description": "用户登录",
        "operationId": "loginUsingGET",
        "parameters": [{
          "name": "userName",
          "in": "query",
          "description": "userName",
          "required": true,
          "type": "string"
        }, {
          "name": "password",
          "in": "query",
          "description": "password",
          "required": true,
          "type": "string"
        }, {
          "name": "cToken",
          "in": "query",
          "description": "cToken",
          "required": true,
          "type": "string"
        }, {
          "name": "captcha",
          "in": "query",
          "description": "captcha",
          "required": true,
          "type": "string"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象"
            }
          }
        }
      }
    },
    "/api/v1/user/register": {
      "post": {
        "tags": ["login-controller"],
        "summary": "用户注册",
        "description": "用户注册",
        "operationId": "registerUsingPOST",
        "consumes": ["application/json"],
        "parameters": [{
          "name": "id",
          "in": "query",
          "required": false,
          "type": "integer",
          "format": "int64"
        }, {
          "name": "createUser",
          "in": "query",
          "required": false,
          "type": "string"
        }, {
          "name": "updateUser",
          "in": "query",
          "required": false,
          "type": "string"
        }, {
          "name": "createTime",
          "in": "query",
          "required": false,
          "type": "string",
          "format": "date-time"
        }, {
          "name": "updateTime",
          "in": "query",
          "required": false,
          "type": "string",
          "format": "date-time"
        }, {
          "name": "roleCode",
          "in": "query",
          "required": false,
          "type": "string"
        }, {
          "name": "realName",
          "in": "query",
          "required": false,
          "type": "string"
        }, {
          "name": "userName",
          "in": "query",
          "required": false,
          "type": "string"
        }, {
          "name": "password",
          "in": "query",
          "required": false,
          "type": "string"
        }, {
          "name": "telphone",
          "in": "query",
          "required": false,
          "type": "string"
        }, {
          "name": "userLevel",
          "in": "query",
          "required": false,
          "type": "integer",
          "format": "int32"
        }, {
          "name": "createType",
          "in": "query",
          "required": false,
          "type": "integer",
          "format": "int32"
        }, {
          "name": "updateType",
          "in": "query",
          "required": false,
          "type": "integer",
          "format": "int32"
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/服务应答数据对象"
            }
          }
        }
      }
    }
  },
  "definitions": {
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
            "$ref": "#/definitions/HospitalRiskType"
          }
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
          "type": "string",
          "description": "事件名称",
          "allowEmptyValue": false
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
        "code": {
          "type": "integer",
          "format": "int32",
          "description": "类型编码 1全市平均，2本院",
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
          "description": "疑点金额",
          "allowEmptyValue": false
        },
        "money": {
          "type": "number",
          "description": "统筹金额",
          "allowEmptyValue": false
        },
        "totalMoney": {
          "type": "number",
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
            "$ref": "#/definitions/PharmacyRiskType"
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
  }
}