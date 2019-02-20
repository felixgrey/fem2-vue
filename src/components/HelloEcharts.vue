<template>
	<div>
		<div>{{refresh}}</div>
		<v-chart v-if="chartOption" :options="chartOption"/>
	</div>
</template>

<script>
/* eslint-disable */
import {transform, bmpApiReady, addBmapBoundary } from '@/components/fem2Pro';

// 全局配置色彩列表
transform.echarts.COLORS = ["#26cdd8", '#3786ff', "#eec800", '#f5626f', '#9879ee'];

// console.log(transform.echarts)

// 测试数据
let data = [];
for (let i = 0 ; i < 8; i++) {
  data.push({
    id:i+1,
    hospital: i%3 == 0 ? '张三医院' : '李四医院',
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
    hospital: '王五医院',
    lng: 122.85 + Math.random(),
    lat: 41.25 + Math.random(),
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

function testLbaOption() {
	// lba的含义是 line bar area 这三种图表的数据格式完全一样，因此统一处理
	return transform.echarts.lbaOption({
	  // 必填
	  dataSource: data, // 数据源, 默认空数组
	  xAxisField: 'hospital', // x轴对应字段
	  yAxisField: 'money', // y轴对应字段  
	  // 多系列（类目）必填，单系列不要填
	  seriesField: 'sex', // 系列对应字段
 
	  // yAxisField的聚合方式，通常不用填，默认 transform.AGGREGATES.sum
	  aggregate: transform.AGGREGATES.sum, // 值聚合函数	  
	  // 样式配置，非必填
	  colors: ['red','yellow','green','blue'], // 全部颜色,按次序循环使用, 默认使用全局配置 
	  smooth: true, // 平滑曲线, 只在 type=line 有效
	  stack: false, // 是否是堆叠图，默认 false
		//type: 'bar', // line bar area 必须小写,默认line
	  type: name => name === '男' ? 'bar' : 'area', // 类型可以通过函数动态判断
	  areaColors: 'line:red-green', // 区域渐变色，只在type=area有效， 参数格式：  渐变类型(line、radial):起始色-结束色
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
	//itemColors: (current, param, echarts) => { console.log(current, echarts); return 'black'} // 也可以直接写函数，返回颜色，current是按次序应该用的颜色
	});
}


let chartOption;

let lbaOption = testLbaOption();

// rp的含义是 radar pie
let rpOption = transform.echarts.rpOption({
	dataSource: data,
	nameField: 'hospital',
	valueField: 'money',
	aggregate: transform.AGGREGATES.sum, // 值聚合函数	  
//	itemColors: 'black-'
})

let mapOption = transform.echarts.bmapOption({
	dataSource: data,
	lngField: 'lng',
	latField: 'lat',
	valueField: 'money',
	type: 'scatter',
});

chartOption = mapOption;

// option新增配置option.executor，可以自定义函数满足业务需求,相当于简化的echarts组件

// 注册option.executor方法,后几个参数参考echarts组件扩展相关文档, 该方法将在echarts初始化或执行setOption后执行
transform.echarts.optionExecutor('demoExecutor', (fun, api, femModel, ecModel, option) => {
  fun('演示executor用法');
});

function hiddenYouKnowWhat(bmap){
	// 不显示地图、LOGO、版权信息，背景透明
	const styleNode = document.createElement('style');
	styleNode.innerHTML = `.ec-extension-bmap .anchorBL,.ec-extension-bmap img{display:none};`;
	document.head.appendChild(styleNode);
	bmap.getContainer().style.backgroundColor = 'transparent';
}

chartOption.executor = {
//	clear: true,
	// 百度地图的executor
	onBmapReady: (bmap) => { // 如果存在使用百度地图的series，则返回百度地图对象，否则返回false， 只执行一次
		if(bmap){
			bmap.centerAndZoom('沈阳市', 10);
			
			// hiddenYouKnowWhat(bmap);
			
			// 添加行政区划
			addBmapBoundary(bmap, '沈阳市和平区');
		}
	},
	demoExecutor: (value) => { // option.executor演示
		console.log(`demoExecutor`, value);
	}
}

//echarts配置
//console.log(chartOption);

//chartOption.title = {
//  text: '旧的标题',
//  x: 'center'
//};

export default {
	data () {
		return {
			refresh: '没有刷新',
			chartOption: null
		}
	},
	mounted(){
		
		if(chartOption !== mapOption){
			this.chartOption = chartOption;
		}
		
		// 地图图表必须在地图API加载完成后配置
		bmpApiReady.then(() => {
			this.chartOption = mapOption;
//			this.chartOption = testLbaOption();
		});

		setTimeout(() => {
			this.refresh = '刷新了！！';	
			
			for (let i = 12; i < 20; i++) {
			  data.push({
			    id: i+1,
			    hospital: '哈哈医院',
			    sex: i%3 ? '女' : '男',
			    money: i*200,
			    age: 10+2*i,   
			  });
			}
			
			
			
			// data = [];
			
//			chartOption.title = { // 如果是新增变量就不能刷新
//		        text: '新的雨量流量关系图',
//		        subtext: '数据来自西安兰特水电测控技术有限公司',
//		        x: 'center'
//		    };
//			this.chartOption = chartOption;
//			let _op = testLbaOption();
//			_op.executor.clear = true;
//			this.chartOption = _op;
		}, 5000);
	}
}
</script>

<style>
</style>