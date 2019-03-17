<template>
    <div>{{myData}}【{{feModel.data3Status}}】【{{feModel.data3}}】【{{feModel.data3List}}】</div>
</template>

<script>
 /* eslint-disable */
  import {Store, $Transform, blank} from '@/components/marine-vue';

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

Store.globalRunner('a.b.c', function(params){
  console.log(params)
  return ['aaa','bbbb','ccccc'];
})

let group = $Transform(data).toGrouped("sect,sex => money").getData();

//console.log(group)

let storeConfig = {
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

const store = new Store(storeConfig);

store.model.data4 =1;
//store.model.data5 = 2;

const controller = store.controller();

controller.when('data3',()=>{
  console.log(store.model.data3List)
})
//
//store.model.data4 =1;
store.model.data5 = 2;


export default @Store.inject(storeConfig)
class Component extends blank{
  
  vue = {
    mounted(){
      
      setTimeout(() => {
        this.$Model.data4 = {f:"sssss"};
        this.$Model.data5 = {g:'sddgggg'};
      },1000)
      
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