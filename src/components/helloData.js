/* eslint-disable */
import {DataSet, AGGREGATES} from '@/components/fem2';


const data = [];

for (let i = 0 ;i < 8 ;i++) {
  data.push({
    id:i + 1,
    hospital: i%3 !=0 ? '张三医院' :'李四医院',
    sex: i%2 ? '男' : '女',
    money: i*100 +5,
    age: 10+2*i,
    
  });
}

for (let i = 8 ;i < 12 ;i++) {
  data.push({
    id: i + 1,
    hospital: '王五医院',
    sex: i%3 ? '女' : '男',
    money: i*200,
    age: 20+2*i,   
  });
}

console.log(data); // 原始数据

console.log(new DataSet({
  dataSource: data, // 数据源
  aggregate: { // 字段聚合函数
    money: AGGREGATES.sum, // 求和
    age: AGGREGATES.aver, // 平均数
    count: AGGREGATES.count, // 总数
    id: AGGREGATES.join, // 连接
    maxMoney: (param) => { // 计算字段
      param.field = 'money'; // 原字段
      return AGGREGATES.max(param); // 最大值
    },
    minAge: (param) => { // 计算字段
      param.field = 'age'; // 原字段
      return AGGREGATES.min(param); // 最小值
    },
  },
  groupFields:['hospital','sex'],
//groupFields:['hospital'],
//groupFields:[],
  valueFields:['money','age','id','count','maxMoney','minAge'],
//valueFields:[]
}).output());
