<template>
	<div>
		<v-chart style="width:1200px;height:800px" v-if="chartOption" :options="chartOption"/>
	</div>
</template>

<script>
/* eslint-disable */
import {transform, bmpApiReady, addBmapBoundary } from '@/components/vueFem2';

// 全局配置色彩列表
// transform.echarts.COLORS = ["#26cdd8", '#3786ff', "#eec800", '#f5626f', '#9879ee'];

// console.log(transform.echarts)

// 测试数据
let data = [];
for (let i = 0 ; i < 8; i++) {
  data.push({
    id:i+1,
    sect: i%3 == 0 ? '武当派' : '少林派',
    lng: 122.85 + Math.random(),
    lat: 41.25 + Math.random(),
    sex: i%2 ? '男' : '女',
    money: i*100 +5,
    age: 10+2*i,  
  });
}
for (let i = 8; i < 12; i++) {
  data.push({
    id: i+1,
    sect: '峨眉派',
    lng: 122.85 + Math.random(),
    lat: 41.25 + Math.random(),
    sex: i%3 ? '女' : '男',
    money: i*200,
    age: 20+2*i,   
  });
}


function testLbaOption() {
	// lba的含义是 line bar area 这三种图表的数据格式完全一样，因此统一处理
	return transform.echarts.lbaOption({
	  // 必填
	  dataSource: data, // 数据源, 默认空数组
	  xAxisField: 'sect', // x轴对应字段（用x轴的值）
	  yAxisField: 'money', // y轴对应字段  （用y轴的值表示）
	  // 多系列（类目）必填，单系列不要填
	  seriesField: 'sex', // 系列对应字段（用颜色区分）
 
	  // yAxisField的聚合方式，通常不用填，默认 transform.AGGREGATES.sum
	  aggregate: transform.AGGREGATES.sum, // 值聚合函数	  
	  // 样式配置，非必填
	  colors: ['red','yellow','green','blue'], // 全部颜色,按次序循环使用, 默认使用全局配置 
	  smooth: true, // 平滑曲线, 只在 type=line 有效
	  stack: false, // 是否是堆叠图，默认 false
		//type: 'bar', // line bar area 必须小写,默认line
	  type: name => name === '男' ? 'bar' : 'area', // 类型可以通过函数动态判断
	  areaColors: 'line:red-green', // 区域渐变色，只在type=area有效， 参数格式：  渐变类型(line、radial):起始色-结束色
	  // itemColors: type=line时，此配置失效，因为line不支持函数配置颜色
	  itemColors: ['radial:yellow-blue', { // 渐变色也可以是数组格式，第二个数是渐变参数
	  	// 渐变参数参考 echarts.graphic.LinearGradient和echarts.graphic.RadialGradient
	  	// 这些是默认值
	  	x: 0,
	    y: 0,
	    x2: 0,
	    y2: 1,
	    r: 1,
	    offsetfrom: 0,
	    offsetTo: 1
	  }], // 图形渐变色
	  itemColors: (item, corrent, args) => {
//		console.log(item, corrent, args);
		return corrent;
	  }, // 也可以直接写函数，返回颜色，current是按次序应该用的颜色
	  // 在echart实例setOption之后执行
	  executor: {
  		// echart第一次渲染完成时执行,返回echart对象
		onEChartReady: (echart) => {		
		//		console.log(echart.getOption())
		},
		onClickItem:(item) => {
			console.log(item)
		}
	  }
	});
}


let chartOption = testLbaOption();
//let chartOption = null

export default {
	data () {
		return {
			chartOption
		}
	},
	mounted(){
	}
}
</script>

<style>
</style>