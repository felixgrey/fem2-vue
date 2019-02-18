/* eslint-disable */
import {transform} from '@/components/fem2';

const {
  AGGREGATES,  // 自带的聚合函数
  fromArrayInArray, // 二维数组：ArrayInArray（第一条是字段名数组）格式转为对象数组：ObjectInArray格式
  fromObjectInArray // 对象数组：ObjectInArray格式转为二维数组：ArrayInArray（第一条是字段名数组）格式
} = transform;

// 自带的全部6个聚合函数
const {
  sum, // 求和
  aver, // 平均值
  count, // 聚合条数
  join, // 字符串连接
  max, // 最大值
  min // 最小值
} = AGGREGATES;

// 测试数据
const data = [];
for (let i = 0 ; i < 8; i++) {
  data.push({
    id:i+1,
    hospital: i%3 == 0 ? '张三医院' : '李四医院',
    sex: i%2 ? '男' : '女',
    money: i*100 +5,
    age: 10+2*i,  
  });
}
for (let i = 8; i < 12; i++) {
  data.push({
    id: i+1,
    hospital: '王五医院',
    sex: i%3 ? '女' : '男',
    money: i*200,
    age: 20+2*i,   
  });
}

// 原始数据
console.log(data); 

// 聚合后的数据
const transformedData = transform({
  dataSource: data, // 数据源，需要ObjectInArray格式
  aggregate: { // 配置字段聚合函数
//  money: sum, // 默认求和
    age: aver, // 平均年龄
    count: count, // 自定义字段：聚合条数
    id: join, // 聚合的数据id
    maxMoney: param => { // 用自定义的聚合函数计算的自定义字段：最高金额
      param.field = 'money'; // 用于计算的字段
      return max(param);
    },
    minAge: param => {
      param.field = 'age'; 
      return min(param);
    },
  },
  option: { // 额外配置
    $defaultValue: 0, // 数值型字段值为空时的默认值, 默认0（sum、aver、max、min函数使用）
    $defaultText: '', // 字符串型字段值为空时的默认值，默认 ''（join函数使用）
    $split : ',' // 字符串连接聚合时的分隔符,默认 ','（join函数使用）
  },
  groupFields: ['hospital', 'sex'], // 所有分组字段
//groupFields: ['hospital'],
//groupFields: [],
  valueFields: ['money', 'age', 'id', 'count', 'maxMoney', 'minAge'], // 所有聚合字段，包括自定义的字段count、maxMoney、minAge
//valueFields: []
});

console.log(transformedData);

// 两种数据集格式转换
const arrayInArray = fromObjectInArray(transformedData.list);
console.log(arrayInArray);
console.log(fromArrayInArray(arrayInArray));

/* 
 transformedData =
  {
    "enums": { // 分组后的字段值枚举
      "hospital": [ // 按照插入顺序
        "张三医院", 
        "李四医院",
        "王五医院"
      ],
      "sex": [
        "女",
        "男"
      ]
    },
    "list": [ // 聚合后的数据列表
      {
        "hospital": "张三医院",
        "sex": "女",
        "money": 610,
        "age": 16,
        "id": "1,7",
        "count": 2,
        "maxMoney": 605,
        "minAge": 10
      },
      {
        "hospital": "张三医院",
        "sex": "男",
        "money": 305,
        "age": 16,
        "id": 4,
        "count": 1,
        "maxMoney": 305,
        "minAge": 16
      },
      {
        "hospital": "李四医院",
        "sex": "男",
        "money": 1315,
        "age": 18.666666666666668,
        "id": "2,6,8",
        "count": 3,
        "maxMoney": 705,
        "minAge": 12
      },
      {
        "hospital": "李四医院",
        "sex": "女",
        "money": 610,
        "age": 16,
        "id": "3,5",
        "count": 2,
        "maxMoney": 405,
        "minAge": 14
      },
      {
        "hospital": "王五医院",
        "sex": "女",
        "money": 5800,
        "age": 39.333333333333336,
        "id": "9,11,12",
        "count": 3,
        "maxMoney": 2200,
        "minAge": 36
      },
      {
        "hospital": "王五医院",
        "sex": "男",
        "money": 1800,
        "age": 38,
        "id": 10,
        "count": 1,
        "maxMoney": 1800,
        "minAge": 38
      }
    ]
  }
*/
