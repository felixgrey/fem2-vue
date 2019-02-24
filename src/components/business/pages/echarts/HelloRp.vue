<template>
	<div @click="onClick2">
		<v-chart @click="onClick" style="width:1200px;height:800px" v-if="chartOption" :options="chartOption"/>
	</div>
</template>

<script>
/* eslint-disable */
import {transform, } from '@/components/common/fem2DataVisualization';

const riskTypes = transform.business.colorsMap.riskTypes;
const riskTypeList = Object.keys(riskTypes);

// 测试数据
let data = [];
for (let i = 0 ; i < 8; i++) {
  data.push({
    id:i+1,
    hospital: '李四医院',
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
	series:[
		{
			type:'pie',
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
	nameField: 'eventType',
	valueField: 'events',  
	itemColors: (item, corrent, args) => {
	  return riskTypes[item.eventType];
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