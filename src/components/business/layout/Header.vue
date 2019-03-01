<template>
  <div>
    <h1>{{title}}</h1>
    <span ref="componentContainer">
    </span>
  </div>
</template>

<script>
  /* eslint-disable */
  import Vue from 'vue/dist/vue.common.js';
  import {Agent, routesMap} from '@/components/vueFem2';

  export default {
    data: function() {
      return {
        title: '标题',
        myComponents: []
      }
    },
    mounted() {

      this.myController = Agent.manager.controller();
      this.componentInHeader = [];
      
      const setMe = path => {
        
        const {title = path, compnents = []} = ((routesMap[path] || {})._doc || {}).header || {};
        this.title = title;
        
        // 销毁组件和dom节点
        this.componentInHeader.forEach(_vue => _vue.$destroy());
        this.componentInHeader = [];
        this.$refs.componentContainer.innerHTML = '';
        
        //创建组件和dom节点
        [].concat(compnents).forEach(Compnent => {        
          const span = document.createElement('span');
          this.$refs.componentContainer.appendChild(span);
          this.componentInHeader.push(new Vue({render: h => h(Compnent)}).$mount(span));
        });
      };
      
      setMe(window.location.hash.replace('#',''));
      this.myController.on('routeChanged', setMe);

    },
    beforeDestroy(){
      this.myController.destroy();
      this.componentInHeader && this.componentInHeader.forEach(_vue => _vue.$destroy());
      this.componentInHeader = null;
    },
    methods:{
      
    }
  }
</script>

<style>
</style>