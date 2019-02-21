<template>
  <div>
    <v-chart style="width:1200px;height:860px" v-if="chartOption" :options="chartOption"/>
  </div>
</template>

<script>
/* eslint-disable */
import {transform, bmpApiReady, addBmapBoundary } from '@/components/common';
import {syDistricts} from '@/components/business/services/localData/shenyangDistrictsData.js';

const districtColors = transform.business.colorsMap.districts;

// 测试数据
let data = [];
for (let i = 0 ; i < 8; i++) {
  data.push({
    id:i+1,
    hospital: `某医院 - ${i}`,
    lng: 122.85 + Math.random(),
    lat: 41.25 + Math.random(),
    events: i +5,
  });
}

let chartOption = transform.echarts.bmapOption({
  dataSource: data,
//keyFieldAs: ['id', '_ids'], // 将聚合前的主键以数组形式保存到某个字段 格式 [主键:字段名]
  originAs:'_items', // 将聚合前的数据以数组形式保存到某个字段
  lngField: 'lng',
  latField: 'lat',
  valueField: 'events',
  itemColors:(item, current, args) => {
		console.log(item._items[0].hospital);
  	return '#fdd300';
  },
  symbolSize:(item, args) => {
//		console.log(item);
  	return 30;
  },
  type: 'effectScatter',
});

const styleNode = document.createElement('style');
styleNode.innerHTML = `.hidden-you-know-what-bmap-1 .anchorBL,.hidden-you-know-what-bmap-2 img{display:none};svg{};`;
document.head.appendChild(styleNode);

function hiddenYouKnowWhat(bmap, logo = false, img = false) {
  const dom = bmap.getContainer();
  dom.style.backgroundColor = 'transparent';
  
  if(logo) {
  	dom.className = dom.className.replace(' hidden-you-know-what-bmap-1 ') + ' hidden-you-know-what-bmap-1 ';
  }
  
  if(img) {
  	dom.className = dom.className.replace(' hidden-you-know-what-bmap-2 ') + ' hidden-you-know-what-bmap-2 ';
  }
}

chartOption.executor = {
  // 如果存在使用百度地图的series，则返回百度地图对象，否则返回false， 只执行一次
  onBmapReady: (bmap) => {
    if(bmap){
      hiddenYouKnowWhat(bmap, true, true);
      
      syDistricts.forEach(name => {
      	// 添加行政区划
        addBmapBoundary(bmap, name, {
        	strokeWeight: 2, 
        	strokeOpacity: 0.8,
        	fillOpacity: 0.5,
        	strokeColor: "#ffffff", 
        	fillColor: districtColors[name] || "#ffffff"
        });
      });

    }
  }
}

export default {
  data () {
    return {
      chartOption: null
    }
  },
  mounted(){
    // 地图图表必须在地图API加载完成后配置
    bmpApiReady.then(() => {
      this.chartOption = chartOption;
      
    });
  }
}
</script>

<style>
</style>