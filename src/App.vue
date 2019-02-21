<template>
  <div id="app">
    <HelloEcharts />
    <HelloStore msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloEcharts from './components/business/pages/echarts/HelloEcharts.vue';
import HelloStore from './components/business/pages/store/HelloStore.vue';
import './appConfig.js';
//import './components/helloData';

export default {
  name: 'app',
  components: {
    HelloStore,
    HelloEcharts
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
