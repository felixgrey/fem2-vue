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

const sectArray = ['鹿杖客', '鹤笔翁', '苦头陀'];

// 测试数据
let data = [];
for (let i = 0 ; i < 16; i++) {
  data.push({
    id:i+1,
    sect: sectArray[i%sectArray.length] ,
    eventType: riskTypeList[i%riskTypeList.length],
    events: 10+2*i,  
  });
}

// rp的含义是 radar pie
let chartOption = transform.echarts.rpOption({
	type: 'radar', //雷达图
	dataSource: data,
	nameField: 'sect', // 折线名称字段，必填（用颜色区分）
	valueField: 'events',  // 值字段，必填（用半径区分）
	indicatorField: 'eventType', // 雷达维度字段 ，必填（在图表外围列举）
	// itemColors: 此配置失效，因为line不支持函数配置颜色
}); // 无option原型，全部用默认样式

// console.log(chartOption)

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