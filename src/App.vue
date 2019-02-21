<template>
  <div id="app">
    <HelloEchartsBmap v-if="HelloEchartsBmap" />
    <HelloStore  v-if="HelloStore" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloEchartsBmap from './components/business/pages/echarts/HelloEchartsBmap.vue';
import HelloStore from './components/business/pages/store/HelloStore.vue';

//import './components/helloData';

export default {
  name: 'app',
  data:function(){
    return {
      HelloEchartsBmap: true,
      HelloStore: false,
    }
  },
  components: {
    HelloEchartsBmap,
    HelloStore,  
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
