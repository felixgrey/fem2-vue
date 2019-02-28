<template>
  <div>
    <Menu :routes="routes" />
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
  import {injectRouter} from '@/components/vueFem2';
  import './config.js';

  import Footer from './layout/Footer.vue';
  import Header from './layout/Header.vue';
  import Menu from './layout/Menu.vue';
  
  import Error403 from '../errors/403.vue';
  import Error404 from '../errors/404.vue';
  import Error from '../errors/Error.vue';
  
  // 扫描pages目录，自动配置路由
  const pageExports = require.context(
    // 其组件目录的相对路径
    './pages',
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则表达式
    /\w+\.(vue)$/
  );

  // 带目录配置信息的路由列表
  const routes = autoRouter(pageExports).concat([
    {path: '/403', component: Error403},
    {path: '/404', component: Error404},
    {path: '/error', component: Error}
  ]);

  export default {
    name: 'index',
    data: () => ({routes}),
    router: new VueRouter({routes}),
    created() {/*注入路由方法*/ injectRouter(this);},
    components: {Footer, Header, Menu}
  };
</script>

<style>
</style>