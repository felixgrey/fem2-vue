<template>
	<div @click="onClick2">
		<v-chart @click="onClick" style="width:1200px;height:800px" v-if="chartOption" :options="chartOption"/>
	</div>
</template>

<script>
/* eslint-disable */
import {transform, } from '@/components/common/fem2DataVisualization';

const memberNames = transform.business.colorsMap.memberNames;
const riskTypeList = Object.keys(memberNames);

// 测试数据
let data = [];
for (let i = 0 ; i < 8; i++) {
  data.push({
    id:i+1,
    sect: '张无忌',
    eventType: riskTypeList[i%riskTypeList.length],
    events: 10+2*i,  
  });
}

// option原型
let rpOptionPrototype = {
	legend:{
		show: false
	},
	// 当执行setOptions的时候执行的方法
	executor: {
		// echart第一次渲染完成时执行,返回echart对象
		onEChartReady: (echart) => {		
		// console.log(echart.getOption())
		},
		onClickItem:(item) => {
			console.log(item)
		}
	},
	series: [
		{
			type:'pie', // 每个type写一个原型，写多个之前的会被覆盖
			label:{
				formatter: '{b}：{c}件，占比{d}%',
				show: false,
				emphasis: {
		            show: true,
		            textStyle: {
		            	fontSize: '16',
		                fontWeight: 'bold'
		            }
		        }
			},
			radius: ['40%', '60%'],
			itemStyle:{
				borderWidth: 2,
				borderColor: '#fff'
			}
		}
	]
}

// rp的含义是 radar pie
let chartOption = transform.echarts.rpOption({
	dataSource: data,
	nameField: 'eventType', // 名称字段，必填（用颜色区分）
	valueField: 'events',  // 值字段，必填（用扇形角度区分）
	itemColors: (item, corrent, args) => {
	  return memberNames[item.eventType];
	}
}, rpOptionPrototype);

export default {
	data () {
		return {
			chartOption
		}
	},
	mounted(){

	},
	methods:{
		onClick: function(e){
//			console.log(e)
		},
		onClick2: function(e){
//			console.log(e)
		},
	}
}
</script>

<style>
</style>