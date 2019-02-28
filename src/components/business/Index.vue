<template>
  <div>
    <HelloHandsontable />
    <HelloCodemirror />
    <HelloStore />
    ========================================================================
    <HelloEchartsRadar />
    <HelloEchartsPie />
    <HelloEchartsLba />
    <HelloEchartsBmap />   
  </div>
</template>

<script>
/* eslint-disable */
  import menu from './config/menu.js';
  
  function noValue(value) {
    return (value === null || value === undefined);
  }
  
  const components = {};
  const menuLinks = [];
 
  menu.forEach(item => {
    // 组件
    const {name, component} = item;
    (!noValue(name)) && component && (components[name] = component);
    
    // 路由
    const {path = name, redirect} = item;
    
    // 菜单
    const {text = name, icon, detail, hidden, hiddenChildren, disable} = item;
  });

  export default {
    name: 'index',
    data:function(){
      return {
        menuLinks
      };
    },
    components
  };
</script>

<style>
</style>