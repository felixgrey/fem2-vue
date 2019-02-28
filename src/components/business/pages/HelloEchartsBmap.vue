<template>
  <div>
    <v-chart style="width:1200px;height:860px" v-if="chartOption" :options="chartOption"/>
  </div>
</template>

<script>
/* eslint-disable */
import {transform, bmpApiReady, addBmapBoundary } from '@/components/vueFem2';
import {syDistricts} from '@/components/business/services/localData/shenyangDistrictsData.js';

const districtColors = transform.business.colorsMap.districts;

// 测试数据
let data = [];
for (let i = 0 ; i < 8; i++) {
  data.push({
    id:i+1,
    sect: `某流派 - ${i}`,
    lng: 122.85 + Math.random(),
    lat: 41.25 + Math.random(),
    events: i +5,
  });
}

let chartOption = transform.echarts.bmapOption({
  dataSource: data,
  originAs: 'originItems', // 将聚合前的数据以数组形式保存到某个字段，默认_item
  lngField: 'lng',
  latField: 'lat',
  valueField: 'events',
  mapOptions: { //地图配置，参考 http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b1
  	enableMapClick: false
  },
  itemColors:(item, current, args) => {
//		console.log(item.originItems[0].sect);
  	return current;
  },
  symbolSize:(item, args) => {
//		console.log(item);
  	return item.events * 5;
  },
  type: 'effectScatter',
});

// 扩展配置
chartOption.executor = {
	// echart第一次渲染完成时执行,返回echart对象
	onEChartReady: (echart) => {		
//		echart.on('click', (e) => { // echart点击事件
//			console.log(e)
//		})
//		console.log(echart)
	},
  // 如果存在使用百度地图的series，则返回百度地图对象，否则返回null， 只执行一次
  onBmapReady: (bmap, echart) => {
    if(bmap){
      
//    echart.on('click', (e) => { // echart点击事件
//    	const [lng, lat ,, {_items}] = e.data;
//				// bmap.openInfoWindow(new BMap.InfoWindow(_items[0].sect,{width:100, height: 40}), new BMap.Point(lng,lat))
//			})
			let points = []
			bmap.addEventListener("click", function(e) {
				let ll = '['+e.point.lng + "," + e.point.lat +']';
					console.log(ll);
					points.push(ll);
			});
			
			Object.defineProperty(window,'yhsc',{
				set:function(){
					console.log(points.join(','));
					points = [];
				}
			})

      syDistricts.forEach(name => {
      	// 添加行政区划
        addBmapBoundary(bmap, name, {
        	strokeWeight: 2, 
        	strokeOpacity: 0.8,
        	fillOpacity: 0.5,
        	strokeColor: "#ffffff", 
        	fillColor: districtColors[name] || "#000"
        }).then((pg) => { // 可能需要异步获取数据，所以采用Promise模式
        	if(pg) { //如果获取行政区域数据失败，返回null
        		pg.addEventListener('click', (e) => { // 因为有echarts遮挡，所以在这里监听事件没用。。。
        			console.log(e)
        		})
        	}
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