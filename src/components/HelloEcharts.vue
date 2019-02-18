<template>
	<v-chart :options="lbaChartOption"/>
</template>

<script>
/* eslint-disable */
import {transform} from '@/components/fem2Pro';

// console.log(transform.echarts)

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
//console.log(data); 

// 聚合后的数据
const transformedData = transform({
  dataSource: data, 
  groupFields: ['hospital', 'sex'],
//groupFields: ['hospital'],
  valueFields: ['money'],
});

//console.log(transformedData);


// lba的含义是 Line Bar Area
const lbaChartOption = transform.echarts.lbaOption({
  // 必填
  dataSource: data, // 数据源, 默认空数组
  xAxisField: 'hospital', // x轴对应字段
  yAxisField: 'money', // y轴对应字段
  
  // 多系列必填
  seriesField: 'sex', // 系列对应字段
  
  // 值聚合方式，通常不用填
  aggregate: transform.AGGREGATES.sum, // 值聚合函数，默认 sum
  
  // 样式配置，非必填
  colors: ['red','yellow','green','blue'], // 全部颜色,按次序循环使用 
  smooth: true, // 平滑曲线
  stack: true, // 是否是堆叠图，默认 false
//type: 'area', // line bar area 必须小写,默认line, 或者是函数动态判断
  type: name => name === '男' ? 'bar' : 'area',
  itemColors: 'line:red-green', // 元素渐变色：线性变换红到绿 
  areaColors: 'line:-transparent', // 区域渐变色：线性变换当前颜色到透明,空值代表当前颜色
  
});


//echarts配置
//console.log(lbaChartOption);


export default {
	data () {
		return {
			lbaChartOption
		}
	}
}
</script>

<style>
</style>