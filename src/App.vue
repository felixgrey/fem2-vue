<template>
  <div id="app">
    <HellohHandsontable />
    <HelloCodemirror />
    <HelloStore />
    ========================================================================
    <HelloRadar />
    <HelloPie />
    <HelloEchartsLba/>
    <HelloEchartsBmap />   
  </div>
</template>

<script>
/* eslint-disable */
import HellohHandsontable from './components/business/pages/handsontable/HellohHandsontable.vue';
import HelloCodemirror from './components/business/pages/codemirror/HelloCodemirror.vue';
import HelloStore from './components/business/pages/store/HelloStore.vue';
import HelloEchartsBmap from './components/business/pages/echarts/HelloEchartsBmap.vue';
import HelloEchartsLba from './components/business/pages/echarts/HelloEchartsLba.vue';
import HelloPie from './components/business/pages/echarts/HelloPie.vue';
import HelloRadar from './components/business/pages/echarts/HelloRadar.vue';


/*
    <HelloEchartsLba/>
    <HelloRp />
    <HelloEchartsBmap />
    <HelloStore  msg="Welcome to Your Vue.js App"/>
 */

//import './components/helloData';

export default {
  name: 'app',
  data:function(){
    return {
    }
  },
  components: {
    HelloEchartsBmap,
    HelloEchartsLba,
    HelloStore,  
    HelloPie,
    HelloRadar,
    HelloCodemirror,
    HellohHandsontable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
