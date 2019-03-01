<template>
  <div>
    <ul>
      <li :key="item.path" v-for="item in menuData">
        <router-link :to="item.path">{{item.name || item.path}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  /* eslint-disable */
  import {routes} from '@/components/vueFem2';

  export default {
    data: function(){
      return {
        menuData: (routes || []).map(item => {
          const {path, _doc = {}} = item;
          const {name = path} = (_doc.menu || {});
          return {path, name};
        })
      }
    },
    mounted(){}
  }
</script>

<style>
</style>