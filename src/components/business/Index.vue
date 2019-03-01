<template>
  <div>
    <Menu/>
    <div>
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import VueRouter from 'vue-router';
  
  import autoRouter from '@/components/common/autoRouter';
  import {Agent, injectRouter} from '@/components/vueFem2';
  import './config.js';

  import Footer from './layout/Footer.vue';
  import Header from './layout/Header.vue';
  import Menu from './layout/Menu.vue';
  
  import Error403 from '../errors/403.vue';
  import Error404 from '../errors/404.vue';
  import Error from '../errors/Error.vue';
  
  Agent.getRouterParams = () => {
    
  };
  
  // 扫描pages目录，自动配置路由
  const pageExports = require.context(
    // 其组件目录的相对路径
    './pages',
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则表达式
    /[./]\w+\.(vue)$/
  );

  // 带目录配置信息的路由列表
  const routes = autoRouter(pageExports).concat([
    {path: '/403', component: Error403},
    {path: '/404', component: Error404},
    {path: '/error', component: Error},
    {path: '*', component: Error404},
  ]);
  
  Agent.routes = routes; 
  Agent.manager.defineModel('routeModel'); 
  Agent.getRouterParams = () => {
    return Agent.manager.model.routeModel;
  }

  export default {
    name: 'index',
    watch: {
    '$route'(to, from) {    
      Agent.manager.model.routeModel = {
        to:to.path,
        from: from.path,
        params: to.params,
        matched: to.matched[0].path
     };
    }
  },
    router: new VueRouter({routes}),
    created() {
      
      const {$router} = this;

      // 实现Agent.router方法
      Agent.router = (path, option = {}) => {
        if(option.target === '_blank') {
          // TODO: -
        } else if (typeof path === 'string') {
          $router.push(path);
        } else if (typeof path === 'number') {
          $router.go(path);
        }
      }
      
      const {path, params, matched = []} = this.$route;

      // 设置初始路由信息
      Agent.manager.model.routeModel = {
        to: path,
        from: path,
        params: params,
        matched: (matched[0] || {}).path || path
      };     
    },
    components: {Footer, Header, Menu},
    mounted(){
      
    }
  };
</script>

<style>
</style>