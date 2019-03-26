import {Models, $Transform, blank} from '@/components/marine-core';
import $ from 'jquery';


// 随机函数名
const _callback =`_wrapedEmitterCallback${Date.now()}`;

// jquery实现事件发射器
Models.Emitter= class JqEvent {
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
};

export {Models, $Transform, blank};

Models.inject = config => {
  return Component => {   
    if(typeof Component === 'function'){
      Component = new Component().vue;
    }
    
    // created
    const oldCreated = Component.created;
    Component.created = function() {

      this.$Models = new Models(config);
      this.$Controller = this.$Models.controller();
      this.$Model = this.$Models.model; 
      
      this.model = Object.freeze({...this.$Model})      
      this.$Controller.watch((model) => {this.model = model});
      
      oldCreated && oldCreated.apply(this);
    }

    // beforeDestroy
    const beforeDestroy = Component.beforeDestroy;
    Component.beforeDestroy = function() {
      beforeDestroy && beforeDestroy.apply(this);
      
      this.$Models.destroy();
      this.$Models = null;
      this.$Controller = null;
      this.$Model = null;
    }

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


