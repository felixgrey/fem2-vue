import Vue from 'vue';
import $ from 'jquery';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ECharts from 'vue-echarts';
import { Agent, monkey, blank, routesMap} from './common';

export * from './common';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
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
    throw new Error('must has agentName: Agent.component(agentName)');
  } 
  
  return (Component) => {    
    // 类格式的参数，取vue属性值
    if(typeof Component === 'function'){
      Component = new Component().vue;
    }

    // 代理vue生命周期
    Component.created = monkey(Component.created, null, function(result) {      
      const _vue = this;
      const myViewOption = {...option};
      const $viewProtoType = myViewOption.$view = myViewOption.$view || {};
      
       // 视图原型，代理onModelChange方法，刷新组件
      $viewProtoType.onModelChange = monkey($viewProtoType.onModelChange, null, function(result, [model = {}]) {
        // 更新vue数据
        _vue.model = model;
        // 必须根据具体框架确定$modelChange触发时机
        $viewProtoType.store && $viewProtoType.store.emit(`$modelChange:${this.uniKey}`);
        return result;
      });

      const $view = this.$View = Agent.createView(agentName, myViewOption);
      $view.initView({$name: '$storeView'}, myViewOption.$store || this.store); // 定义在props里的store
      
      this.$Store = $view.store || null;
      this.$Controller = $view.controller || null;
      this.$Model = this.$Store ? $view.store.model : null;
      
      return result;
    });
    
    Component.mounted = monkey(Component.mounted, null, function(result) {
        if (result !== false) {
          this.$View && this.$View.viewReady();
        }
        return result;
    });
    
    Component.beforeDestroy = monkey(Component.beforeDestroy, null, function(result) {
        this.$View && this.$View.viewOff();
        this.$View = null;
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
};

// vue路由在根实例创建后注入
export function injectRouter(_vue) {
  
  _vue.$router.beforeEach(({path}, from, next) => {
    Agent.manager.emit('beforeRouteChange', path);
    
    if(path === '/403' || path === '/404' || path === '/error') {
      next();
      return;
    }
    
    if(!routesMap[path]) {
      next('/404');
      return;
    }
    
    next();
  });
  
  _vue.$router.afterEach( to => {
     Agent.manager.emit('routeChanged', to.path);
  });

  Agent.router = (path, option = {}) => {
    if(option.target === '_blank') {
      // TODO: -
    } else if (typeof path === 'string') {
      _vue.$router.push(path);
    } else if (typeof path === 'number') {
      _vue.$router.go(path);
    }
   
  }
}
