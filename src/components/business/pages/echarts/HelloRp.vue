<template>
	<div @click="onClick">
		<v-chart style="width:1200px;height:800px" v-if="chartOption" :options="chartOption"/>
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

// rp的含义是 radar pie
let chartOption = transform.echarts.rpOption({
	dataSource: data,
	nameField: 'eventType',
	valueField: 'events',  
	itemColors: (item, corrent, args) => {
	  return riskTypes[item.eventType];
	}
});

chartOption.legend = null;
Object.assign(chartOption.series[0],{
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
	radius: ['40%', '60%']
})

Object.assign(chartOption.series[0].itemStyle,{
	borderWidth: 2,
	borderColor: '#fff'
});

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
			console.log(e)
		}
	}
}
</script>

<style>
</style>