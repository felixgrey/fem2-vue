import { EventEmitter } from 'events';
import {Models, $Transform, blank, noValue} from '@/components/marine-core';

export {Models, $Transform, blank, noValue};

Models.Emitter = class NodeEvent extends EventEmitter {
  constructor(...args) {
    super(...args)
    this.setMaxListeners(Infinity);
  }

  off(...args) {
    return this.removeListener(...args);
  }
}

Models.component = () => {
  return Component => {
    
    // componentWillMount
    const oldComponentWillMount = Component.prototype.componentWillMount;
    Component.prototype.componentWillMount = function() {
      if(!this.props.models) {
       throw new Error('props of component need models');
      }
      this.$Models = this.props.models;
      this.$Controller = this.$Models.controller();
      this.$Model = this.$Models.model; 
      this.$Controller.watch((model) => {this.setState({model});});   
      oldComponentWillMount && oldComponentWillMount.apply(this);
    }
    
    // componentWillUnmount
    const oldComponentWillUnmount = Component.prototype.componentWillUnmount;
    Component.prototype.componentWillUnmount = function() {
      oldComponentWillUnmount && oldComponentWillUnmount.apply(this);  
      this.$Controller.destroy();
      this.$Controller = null;
      this.$Models = null;
      this.$Model = null;
    }
    
    return Component;
    
  };
}

Models.inject = (config = {}) => {
  return Component => {  
    // componentWillMount
    const oldComponentWillMount = Component.prototype.componentWillMount;
    Component.prototype.componentWillMount = function() {
      this.$Models = new Models(config);
      this.$Controller = this.$Models.controller();
      this.$Model = this.$Models.model; 
      this.$Controller.watch((model) => {this.setState({model});});   
      oldComponentWillMount && oldComponentWillMount.apply(this);
    }
    
    // componentWillUnmount
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