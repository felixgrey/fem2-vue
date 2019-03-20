<template>
  <div>
    <div>{{myData}}【{{model.data3Status}}】【{{model.data3}}】【{{model.data3List}}】</div>
    <div id='test01' style="margin-top:30px;height:1000px;background: red;">002</div>
    <div id='test02'  style="margin-top:30px;height:1000px;background: green;">003</div>
  </div>  
</template>

<script>
 /* eslint-disable */
  import {Models, $Transform, blank} from '@/components/marine-vue';
  import position from 'position';
  import getElementRelativeOffset from 'get-element-relative-offset';
  import apiData from './_apidata.js';

// 测试数据
const data = [];
for (let i = 0 ; i < 8; i++) {
  data.push({
    id:i+1,
    sect: i%3 == 0 ? '张三医院' : '李四医院',
    sex: i%2 ? '男' : '女',
    money: i*100 +5,
    age: 10+2*i,  
  });
}
for (let i = 8; i < 12; i++) {
  data.push({
    id: i+1,
    sect: '王五医院',
    sex: i%3 ? '女' : '男',
    money: i*200,
    age: 20+2*i,   
  });
}
for (let i = 12; i < 15; i++) {
  data.push({
    id: i+1,
    sect: '男科医院',
    sex: '男',
    money: i*200,
    age: 20+2*i,   
  });
}

for (let i = 15; i < 18; i++) {
  data.push({
    id: i+1,
    sect: '妇科医院',
    sex: '女',
    money: i*200,
    age: 20+2*i,   
  });
}

for (let i = 18; i < 20; i++) {
  data.push({
    id: i+1,
    sect: '宠物医院',
    sex: null,
    money: i*200,
    age: 20+2*i,   
  });
}

Models.globalRunner('a.b.c', function(params){
  console.log(params)
  return ['aaa','bbbb','ccccc'];
})

//console.log($Transform(data)
//.toGrouped("sect,sex => money")
//.output());
//
//console.log($Transform(data)
//.toSeries("sect,sex => money")
//.output());

//console.log($Transform(data)
//.toNumSeries({
//  group: "sect => money",
//  defaultSeriesName: '医院',
//  xData: ['张三医院','李四医院','XX医院', '王五医院', '男科医院', '妇科医院', '宠物医院', '精神病院']
//})
//.output());
//
//console.log($Transform(data)
//.toPieSeries({
//  group: "sect,sex => money:aver",
//})
//.output());
//
//console.log($Transform(data)
//.toHeatSeries({
//  group: "sect,sex => money:aver",
//})
//.output());

//console.log($Transform(data)
//.toRadarSeries({
//  group: "sect,sex => money",
//})
//.output());

//console.log($Transform(data)
//.toScatterSeries("sect, sex => money, age: aver")
//.output());

let tree = [];

for(let i = 1;i < 5; i++) {
  const item = {
    id:i,
    children: []
  }
  tree.push(item);
  for(let j = 1; j< 5; j++){
    const item2 = {
      id: 10*i+j,
      children: []
    }
    item.children.push(item2);
    for(let k = 1; k< 5; k++){
      const item3 = {
        id: 100*i + 10*j + k,
        children: []
      }
      item2.children.push(item3);
    }
  } 
}

console.log(tree)
const tree2 = $Transform(JSON.parse(JSON.stringify(tree))).fromTree({rootParentKeyValue: 0}).getData();
console.log(tree2)
console.log($Transform(JSON.parse(JSON.stringify(tree2))).toTree({rootParentKeyValue: 0}).getData());




let api = $Transform(apiData.paths)
  .fromObject('path')
  .fromStructList([
    {from: 'path', to: 'path'},
    {from: 'get.tags.0|post.tags.0', to: 'tag'},
    {from: 'get.description|post.description', to: 'desc'}
  ])
  .output();


//console.log(api)

let modelsConfig = {
    data1:{
      default:[{a: 'aaa'},{b:'ssss'}]
    },
    data2:{
      default:{c:'sdfsdf'}
    },
    data3:{
      type:'a.b.c',
      dependence:['data4','data5'],
      filter:['data1','data2','data6']
    }
};

const models = new Models(modelsConfig);

models.model.data4 =1;
models.model.data5 = 2;

const controller = models.controller();

controller.when('data3',()=>{
  console.log(models.model.data3List)
})
//
//models.model.data4 =1;
models.model.data5 = 2;


function toDomPosition(dom, root = document.getElementById('app')){
  const {top} =  getElementRelativeOffset(dom,(dom)=>{
    return dom === document.getElementById('app')
  });
  window.scrollTo(0, top);
}

export default @Models.inject(modelsConfig)
class Component extends blank{
  
  vue = {
    mounted(){
      this.$Model.data4 = {f:"sssss"};
      this.$Model.data5 = {g:'sddgggg'};
      
      setTimeout(() => {  
//      this.$Model.data5 = {g:'sddgggg'};
      }, 2000);
      
      toDomPosition(document.getElementById('test02'))

      
      
    },
    updated(){
      toDomPosition(document.getElementById('test02'))
    },
    data(){
      return {
        myData:'我的数据'
      };
    }
  }
  
}
</script>

<style>
</style>