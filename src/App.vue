<template>
  <div id="app">
    <HelloHandsontable />
    <HelloCodemirror />
    <HelloStore />
    ========================================================================
    <HelloEchartsRadar />
    <HelloEchartsPie />
    <HelloEchartsLba/>
    <HelloEchartsBmap />   
  </div>
</template>

<script>
/* eslint-disable */
import HelloHandsontable from './components/business/pages/HelloHandsontable.vue';
import HelloCodemirror from './components/business/pages/HelloCodemirror.vue';
import HelloStore from './components/business/pages/HelloStore.vue';
import HelloEchartsBmap from './components/business/pages/HelloEchartsBmap.vue';
import HelloEchartsLba from './components/business/pages/HelloEchartsLba.vue';
import HelloEchartsPie from './components/business/pages/HelloEchartsPie.vue';
import HelloEchartsRadar from './components/business/pages/HelloEchartsRadar.vue';


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
  	HelloHandsontable,
  	HelloCodemirror,
  	HelloStore, 
    HelloEchartsBmap,
    HelloEchartsLba,   
    HelloEchartsPie,
    HelloEchartsRadar,
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
