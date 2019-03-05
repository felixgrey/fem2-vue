<template>
  <div></div>
</template>

<script>
  /* eslint-disable */
  import {transform, Agent} from '@/components/vueFem2';
  import apiData from './_apidata.js';
  
//Agent.ajax('http://localhost:8080/v2/api-docs',{},{dataType: 'jsonp',type:'jsonp'}).then((result) => {
//  console.log(result);
//})

let apiList = transform.process(apiData.paths)
  .fromObject('path')
  .fromStructInArray([
    {from: 'path', to: 'path'},
    {from: 'get.tags.0|post.tags.0', to: 'tag'},
    {from: 'get.description|post.description', to: 'desc'}
  ]).outPut().map(item => {
    const name = item.path.split('/').pop().replace(/(-\w)/g,(a) => {return a.replace('-','').toUpperCase()});
    return `  /* \n  ${name}: { // ${item.desc || '-'} \n    type: "${item.path.replace('/api/v1/', '')}",   \n  }, \n  */\n  "${item.path}", `;
  });
  
  console.log('export default [\n ' + apiList.join('\n') + '\n];\n');
  
  export default {}
</script>

<style>
</style>