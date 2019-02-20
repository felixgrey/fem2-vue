import {transform} from './Utils';

export * from './Utils.js';
export * from './lba.js';// 折线 条 区域
export * from './sh.js';// 散点 热力
export * from './rp.js';// 雷达 饼
export * from './cloud.js';// 词云
export * from './wave.js';// 水波
export * from './sg.js';// 桑基图 关系图
export * from './ts.js'; // 树图 矩形树图 旭日图
export * from './bmap.js'; // 百度地图

// transform.bmapVersion = '3.0'; // 百度地图API版本，默认3.0

transform.bmapConfig = {
  
    // 百度地图中心经纬度
    center: [120.13066322374, 30.240018034923],
    // 百度地图缩放
    zoom: 14,
    // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
    roam: true,
    // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
    mapStyle: {}
}

transform.bmapAK = '3zq2c5fIT48YHlvVGVd8ShkBqF8LafPW'; // 百度地图AK，设置后自动加载百度地图,必须在最后设置

