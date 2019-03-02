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
  
  const _routes = (routes || []);
  const _defaultIndex = _routes.length;

  export default {
    data: function(){
      return {
        menuData: _routes.filter(item => item.path.indexOf(':') === -1).map(item => {
          const {path, _doc = {}} = item;
          const {name = path, index = _defaultIndex} = (_doc.menu || {});
          return {path, name, index};
        }).sort((a, b)=> (a.index - b.index))
      }
    },
    mounted(){
//    console.log(this.menuData)
    }
  }
</script>

<style>
</style>