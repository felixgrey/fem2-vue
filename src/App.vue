<template>
  <div id="app">
    <HelloEchartsLba v-if="HelloEchartsLba" />
    <HelloRp v-if="HelloRp" />
    <HelloEchartsBmap v-if="HelloEchartsBmap" />
    <HelloStore  v-if="HelloStore" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloStore from './components/business/pages/store/HelloStore.vue';

import HelloEchartsBmap from './components/business/pages/echarts/HelloEchartsBmap.vue';
import HelloEchartsLba from './components/business/pages/echarts/HelloEchartsLba.vue';
import HelloRp from './components/business/pages/echarts/HelloRp.vue';

//import './components/helloData';

export default {
  name: 'app',
  data:function(){
    return {
      HelloEchartsBmap: false,
      HelloEchartsLba: true,
      HelloStore: false,
      HelloRp: false,
    }
  },
  components: {
    HelloEchartsBmap,
    HelloEchartsLba,
    HelloStore,  
    HelloRp,
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
