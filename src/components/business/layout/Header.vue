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
  import {Agent} from '@/components/vueFem2';

  export default {
    data: function() {
      return {
        title: '标题',
        myComponents: []
      }
    },
    mounted() {
      // 获取路由配置信息
      const routesMap = {};    
      Agent.routes.forEach(item => {
        routesMap[item.path] = (item._doc || {}).header || {};
      });

      this.myController = Agent.manager.controller();
      this.componentInHeader = [];

      const setMe = (info) => {
        // 获得配置信息
        const {title = Agent.defaultHeaderTitle, compnents = []} = routesMap[info.matched] || {};

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
        
        //设置标题
        this.title = title;
      };
      
      this.myController.watch('routeModel', setMe);

    },
    beforeDestroy() {
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