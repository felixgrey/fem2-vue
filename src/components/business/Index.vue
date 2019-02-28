<template>
  <div>
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
  import menu from './config/menu.js';
  
  const components = {};
  menu.forEach(item => {
    const {name, component} = item;
    components[name] = component;
  });

  export default {
    name: 'layout',
    data:function(){
      return {
      };
    },
    components
  };
</script>

<style>
</style>