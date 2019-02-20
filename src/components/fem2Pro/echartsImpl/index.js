//transform是DataSet数据转换格式工具，同时也作为上下文对象，本系统以此为基础将数据转为echarts的option格式。
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

// 百度地图API版本，默认3.0
// transform.bmapVersion = '3.0'; 

// 详情参考  https://github.com/apache/incubator-echarts/tree/master/extension/bmap
transform.bmapConfig = { 
    // 百度地图中心经纬度
    center: '沈阳市',
    // 百度地图缩放
    zoom: 14,
    // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
    roam: true,
    // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
    mapStyle: {}
}

// 百度地图AK，设置后会自动加载百度地图,因此必须在最后设置
transform.bmapAK = '3zq2c5fIT48YHlvVGVd8ShkBqF8LafPW'; 

