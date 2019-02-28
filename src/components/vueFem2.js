import Vue from 'vue';
import $ from 'jquery';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ECharts from 'vue-echarts';
import { Agent, monkey, blank} from './common/fem2';

export * from './common';

Vue.use(BootstrapVue);
Vue.component('v-chart', ECharts);

// jquery实现事件发射器
Agent.Emitter= class JqEvent {
  constructor(){
    this.core = $({});
  }
  // callback匹配jquery参数格式
  _callbackOuter(callback){
    const callbackOuter = (jqEvt) => {
      return callback(...jqEvt.femData);
    }
    callback._callback = callbackOuter;
    return callbackOuter;
  }
  // 监听事件
  on(name, callback) {     
    this.core.on(name, this._callbackOuter(callback));
  }
  // 一次性监听
  once(name, callback) {
    this.core.one(name, this._callbackOuter(callback));
  }
  // 发射事件
  emit(name, ...femData) {
    this.core.trigger({type:name, femData});
  }
  // 解除监听
  off(name, callback) {
    this.core.off(name, callback._callback);
  }
};

// 定义组件的修饰器
Agent.component = (agentName, option = {}) => {
  if(!agentName) {
    throw new Error('Agent.component require (agentName)');
  } 
  
  return (Component) => {    
    // 类格式的参数，取vue属性值
    if(typeof Component === 'function'){
      Component = new Component().vue;
    }
    
    // 视图原型，代理onModelChange方法，刷新组件
    let $view = option.$view || {};
    $view.onModelChange = monkey($view.onModelChange, null, function(result, [model = {}]) {
      this.$vue.model = model;
      // 必须根据具体框架确定$modelChange触发时机
      $view.store.emit(`$modelChange:${$view.uniKey}`);
      return result;
    });
    option.$view = $view;
    $view = Agent.createView(agentName, option);

    // 代理vue生命周期
    Component.created = monkey(Component.created, null, function(result) {
        $view.$vue = this;
        $view.initView({$name: '$storeView'}, option.$store || this.store);
        
        this.$View = $view;
        this.$Store = $view.store;
        this.$Controller = $view.controller;
        this.$Model = $view.store.model;
        return result;
    });
    
    Component.mounted = monkey(Component.mounted, null, function(result) {
        if (result !== false) {
          $view.viewReady();
        }
        return result;
    });
    
    Component.beforeDestroy = monkey(Component.beforeDestroy, null, function(result) {
        $view.viewOff();
        $view.$vue = null;
        this.$view = null;
        $view = null;
        return result;
    });
    
    const props = Component.props = Component.props || {};
    props.config = {type: Object};
    props.store = {type: Object};

    const oldData = Component.data || blank;
    if(typeof oldData === 'function') {
      Component.data = function (){
        const result = {...oldData.bind(this)(), model:{}};
        return result;
      }
    } else {
      Component.data = {...oldData, model:{}};
    }
   
    return Component;
  }
}

// 封装JQuery的ajax
Agent.ajax = function(url, data, option = {}){
  return new Promise((resolve, reject) => { 
    $.ajax(Object.assign({
      $resolve: resolve,
      $reject: reject,
      url,
      data,
      dataType: 'json',
      type: 'get',     
      success: resolve,
      error: function (XHR, msg, err) {
        reject(err);
      },
    }, option)); 
  });
}

// 封装vue路由
Agent.router = (path = '', option = {target: '_self'}) => {
  global.console.log(path, option);
}

