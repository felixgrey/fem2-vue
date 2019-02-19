<template>
  <div id="app">
    <HelloEcharts />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloEcharts from './components/HelloEcharts.vue';
import HelloWorld from './components/HelloWorld.vue';
//import './components/helloData';

export default {
  name: 'app',
  components: {
    HelloWorld,
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
