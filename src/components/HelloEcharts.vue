<template>
	<div>
		<div>{{refresh}}</div>
		<v-chart :options="lbaChartOption"/>
	</div>
</template>

<script>
/* eslint-disable */
import {transform} from '@/components/fem2Pro';

// 全局配置色彩列表
transform.echarts.COLORS = ["#26cdd8", '#3786ff', "#eec800", '#f5626f', '#9879ee'];

// console.log(transform.echarts)

// 测试数据
let data = [];
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

function test() {
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
	  colors: ['red','yellow','green','blue'], // 全部颜色,按次序循环使用 
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
	//itemColors: (current, echarts) => { console.log(current, echarts); return 'black'} // 也可以直接写函数，返回颜色，current是按次序应该用的颜色
	});
}


// lba的含义是 Line Bar Area 这三种图表的数据格式完全一样，因此统一处理
let lbaChartOption = test();




//echarts配置
//console.log(lbaChartOption);


lbaChartOption.title = {
    text: '旧的雨量流量关系图',
    subtext: '数据来自西安兰特水电测控技术有限公司',
    x: 'center'
};

export default {
	data () {
		return {
			refresh: '没有刷新',
			lbaChartOption
		}
	},
	mounted(){	
		setTimeout(() => {
			
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
			
			lbaChartOption.title = { // 如果是新增变量就不能刷新
		        text: '新的雨量流量关系图',
		        subtext: '数据来自西安兰特水电测控技术有限公司',
		        x: 'center'
		    };
		    this.refresh = '刷新了！！';
			this.lbaChartOption = test();
			console.log('刷新',this.lbaChartOption); 
		}, 3000);
	}
}
</script>

<style>
</style>