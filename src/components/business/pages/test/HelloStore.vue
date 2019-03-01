<template>
	<div>
		<div>{{msg}}</div>
		<div>{{myData}} {{model.data1Data}}</div>
		<div>{{model.data2First}} {{model.data2Data}}</div>
		<div>{{model.data3Status}} {{model.data3Data}}</div>
	</div>
	
</template>

<script>
/* eslint-disable */
import {manager, Store, Agent, blank} from '@/components/vueFem2';

//console.log(manager);

//manager.on('aaa',(...param)=>{
//	console.log(param);
//})
//
//manager.emit('aaa','asdf','ddd',123)
//manager.emit('aaa','sss')
//
//manager.emit('bbb','eee')
//manager.on('bbb',(param)=>{
//	console.log(param);
//})

//manager.when('ccc',(param)=>{
//	console.log(param);
//})
//manager.on('ccc',(param)=>{
//	console.log(param);
//})

//manager.set('ccc','ccc')

//manager.on('ccc',(param)=>{
//	console.log(param);
//})

//manager.when('ccc',(param)=>{
//	console.log(param);
//})

//manager.when(['ccc','ddd'],(param,p2)=>{
//	console.log(param,p2);
//})
//
//manager.set('ddd','ddd')

//manager.status('ddd','loading')
//manager.set('ddd','ddd')
//console.log(manager.status('ddd'))


//const store = new Store({
//	data1:{
//		default:['aaa','bbbb']
//	},
//	data2:{
//		default:'ccc'
//	},
//	data3:{
//		type:'a.b.c',
//		dependence:['data4','data5'],
//		filter:['data1','data2','data6']
//	}
//});

//console.log(store.get('data1'));
//console.log(store.get('data2'));

//store.set('data4',[112])
//store.set('data5',[445])
//
//setTimeout(()=>{
//	store.set('data5',[446])
//});

//store.executor('exe1',(a,b,c,d)=>{
//	console.log(a,b,c,d)
//	return  a+b+c+d;
//})

//store.destroy()

//store.before('exe1',([a,b,c,d])=>{
//	console.log('before',a,b,c,d)
//	return  [2*a,2*b,2*c,2*d];
//})
//
//store.before('exe1',([a,b,c,d])=>{
//	console.log('before',a,b,c,d)
//	return  [2*a,2*b,2*c,2*d];
//})
//
//store.after('exe1',(v,args1,args2)=>{
//	console.log('after',v,args1,args2)
//	return  v+1;
//})
//
//store.after('exe1',(v,args1,args2)=>{
//	console.log('after',v,args1,args2)
//	return  v+1;
//})
//
//console.log(store.run('exe1',1,2,3,4))

export const $Doc = {
    header:{
      title: '测试Store',
    },
    menu:{
      name: '测试store链接'
    }
  }

export default @Agent.store({
	data1:{
		default: ['aaa','bbbb']
	},
	data2:{
		default:'ccc'
	},
	data3:{
		type:'a.b.c',
		dependence: 'data1',
	}
},{
	// $view
	// $store

	// 视图配置
	$viewConfig:{
		// 干预视图数据
		$interfere: (model) => {
//			console.log(model);
//			model.data1 = 'kkkkkkkkkkkkkkkkkkkkkk'
			return model;
		}
	}
})
// 以空函数为基类，在形式上符合继承格式，看起来更直观
class Hello extends blank {
	vue = { // vue配置属性
		name: 'HelloWorld',
		props: {
			msg: String
		},
		data: function(){
			return {
				myData: 'haha'
			};
		},
		mounted: function(){
			
			// 为了避免和 vuex 的$store冲突，用大写S,this.model为渲染数据,this.$Model是this.$Store.model的别名
			// console.log(this.model, this.$View,this.$Store, this.$Controller, this.$Model)
			
			this.$Controller.on(`$modelChange:${this.$View.uniKey}`,() => {
				const {
					data1Data, // data1数据数组
					data1First, // data1数据数组第一条
					data1Status // data1数据状态
				} = this.model;
				//console.log({data1Data, data1First, data1Status});
			});
			
			setTimeout(() => {			
//				this.model.data1Data = ['ssssss']  // this.model是只读属性，必须通过store修改数据
//				this.$Model.data1Data = ['ssssss','dddddd']; 在data3是loading状态的时候作为依赖的data1锁定不能修改
				
				this.$Model.data2Data = ['ssssss','dddddd']; // 通过store的model直接赋值
				this.$Model.data2Data = data => data.map(item => `${item}123`); // 如果传入函数则可以用于更新数据
				this.$Model.data2First = value => `${value}_$$$`; // 更新第一条数据
				this.$Model.data2Status = 'locked'; // 修改状态
				
				const {
					data2Data, // data2数据数组
					data2First, // data2数据数组第一条
					data2Status // data2数据状态
				} = this.$Model; //注意是store的model
				//console.log({data2Data, data2First, data2Status});
				
			},2000);
			
			// return false //mounted return false 会阻止$$view.viewReady的自动执行，可根据业务手动执行。
		}
	}
};

// 带参数的类修饰器是高阶函数，写法不直观，容易出错，而且需要兼容处理
//export default Agent.store({
//	data1:{
//		default:['aaa','bbbb']
//	},
//	data2:{
//		default:'ccc'
//	},
//	data3:{
//		type:'a.b.c',
//		dependence: 'data1',
//	}
//})({
//	name: 'HelloWorld',
//	props: {
//		msg: String
//	},
//	mounted: function(){
//
//	}});


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
