import {Agent, transform} from '@/components/vueFem2';

import './services/myService.js';

// 沈阳行政区域数据
import shenyangDistrictsData from './services/localData/shenyangDistrictsData.js';

// 颜色图谱
import colorsMap from './services/localData/colorsMap.js';

// 加入到配置信息里
Object.assign(transform.bmap.districts, shenyangDistrictsData);

//业务配置
transform.business = {
  colorsMap
}

// 系统配置、数据转换配置、业务配置


Agent.systemConfig = {
  logo: './aaa',
  title: 'XXX系统',
  theme: {
    name: 'ls-light', // light|dark
    fontFamily: '',
    primaryColor: '#1890FF',
  },
  layout: {
    header: {
      show: true,
      fixed: true,
    },
    breadcrumb: {
      show: false,
      fixed: false,
    },
    navigation: {
      autoVariant: false,
      autoMode: false,
      show: true,
      fixed: true,
    },
    footer: {
      show: false,
    },
    responsive: true,
    sizeType: {
      'screen-xs': {
        maxWidth: 575,
      },
      'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
      },
      'screen-md': {
        minWidth: 768,
        maxWidth: 991,
      },
      'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
      },
      'screen-xl': {
        minWidth: 1200,
        maxWidth: 1599,
      },
      'screen-xxl': {
        minWidth: 1600,
      }
    }
  },
  navigation: {
    mode: 'sidemenu', // 'sidemenu|topmenu',  
    menu: [
      {
        icon: './aaa',
        name: '第一层',
        path: null,
        statePath: false,
        redirect: null,
        reload: false,
        target: '_self',
        component: null,
        hidden: false,
        hiddenChildren: false,
        authority: [],
        operationAble: 'crud',
        children: []
      }
    ] 
  }
} 

// authorityConfig [{path:'',authority:[], operationAble:'crud'}]




// 百度地图API版本，默认3.0
// transform.bmapVersion = '3.0'; 

// 详情参考  https://github.com/apache/incubator-echarts/tree/master/extension/bmap
transform.bmap.bmapConfig = { 
    // 百度地图中心经纬度
    center: [123.443000, 41.824000], // 沈阳市
    // 百度地图缩放
    zoom: 11,
    // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
    roam: false,
    // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
    mapStyle: {}
}

// 百度地图AK，设置后会自动加载百度地图,因此必须在最后设置
transform.bmap.bmapAK = '3zq2c5fIT48YHlvVGVd8ShkBqF8LafPW'; 

