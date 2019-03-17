import {Store, $Transform, blank} from '@/components/marine-core';
import $ from 'jquery';


// 随机函数名
const _callback =`_wrapedEmitterCallback${Date.now()}`;

// jquery实现事件发射器
Store.Emitter= class JqEvent {
  constructor(){
    this.core = $({});
  }
  // callback匹配jquery参数格式
  _wrapedCallback(callback){
    const warpedCallback = (jqEvt) => {
      return callback(...jqEvt.femData);
    }
    callback[_callback] = warpedCallback;
    return warpedCallback;
  }
  // 监听事件
  on(name, callback) {     
    this.core.on(name, this._wrapedCallback(callback));
  }
  // 一次性监听
  once(name, callback) {
    this.core.one(name, this._wrapedCallback(callback));
  }
  // 发射事件
  emit(name, ...femData) {
    this.core.trigger({type:name, femData});
  }
  // 解除监听
  off(name, callback) {
    this.core.off(name, callback[_callback]);
  }
  
  destroy(){
  }
};

export {Store, $Transform, blank};

Store.inject = (config) => {
  return (Component) => {
    
    if(typeof Component === 'function'){
      Component = new Component().vue;
    }
    
    // created
    const oldCreated = Component.created;
    Component.created = function() {
      oldCreated && oldCreated.apply(this);
      this.$Store = new Store(config);
      this.$Controller = this.$Store.controller();
      this.$Model = this.$Store.model;  
      this.$Controller.watch((model) => {this.model = model});
    }

    // beforeDestroy
    const beforeDestroy = Component.beforeDestroy;
    Component.beforeDestroy = function() {
      beforeDestroy && beforeDestroy.apply(this);
      this.$Store.destroy();
      this.$Store = null;
      this.$Controller = null;
      this.$Model = null;
    }
    
    // props
    const props = Component.props = Component.props || {};
    props.config = {type: Object};
    props.store = {type: Object};

    // data
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
  }; 
}


