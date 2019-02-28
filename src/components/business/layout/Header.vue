<template>
  <div><button @click="routeTo">路由</button></div>
</template>

<script>
  import {Agent} from '@/components/vueFem2';
  export default {
    methods:{
      routeTo(){
        Agent.router('/HelloEchartsBmap');
      }
    }
  }
</script>

<style>
</style>