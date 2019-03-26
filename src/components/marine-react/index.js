import { EventEmitter } from 'events';
import {Models, $Transform, blank} from '@/components/marine-core';

export {Models, $Transform, blank};

Models.Emitter = class NodeEvent extends EventEmitter {
  constructor(...args) {
    super(...args)
    this.setMaxListeners(Infinity);
  }

  off(...args) {
    return this.removeListener(...args);
  }
}

Models.inject = (config = {}) => {
  return Component => {
    
    const oldComponentWillMount = Component.prototype.componentWillMount;
    Component.prototype.componentWillMount = function() {
      this.$Models = new Models(config);
      this.$Controller = this.$Models.controller();
      this.$Model = this.$Models.model; 

      this.$Controller.watch((model) => {
        this.setState({model});
      });
      
      oldComponentWillMount && oldComponentWillMount.apply(this);
    }
    
    const oldComponentWillUnmount = Component.prototype.componentWillUnmount;
    Component.prototype.componentWillUnmount = function() {
      oldComponentWillUnmount && oldComponentWillUnmount.apply(this);
       
      this.$Models.destroy();
      this.$Models = null;
      this.$Controller = null;
      this.$Model = null;
    }
    
    return Component;
  }
}