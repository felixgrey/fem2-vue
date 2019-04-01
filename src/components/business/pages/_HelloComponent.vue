<template>
  <div>{{model.componentModel}}{{this.name}}</div>
</template>

<script>
   /* eslint-disable */
  import {Models, $Transform, blank} from '@/components/marine-vue';
  
  
export default @Models.component({
  namespace:'HelloComponent',
  runner:{
    test: function(...args){
      console.log(args);
    }
  }
})
class Component extends blank{
  vue = {
    
  }
}
</script>

<style>
</style>