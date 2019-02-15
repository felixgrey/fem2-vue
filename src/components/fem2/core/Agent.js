import {context, uniRandom, blank, same, trne, noValue, errorLog, monkey} from './Utils';
import Store from './Store';

const STOPRUN = context.STOPRUN;
let manager = null;

class Agent {
  constructor(config, viewKey, controller, view) {
    if(!config || !viewKey|| !controller ){
      throw new Error('agent must has config, viewKey, and controller');
    }

    this._invalid = false;
    this._viewReady = false;
    this._updateTimeout = null;
    this._viewKey = viewKey;
    this._config = config;
    
    this.uniKey = uniRandom();
    this.controller = controller;
    this.store = controller.store;
    this.view = view;
    
    if(!noValue(config.$name)){
      this.name = `$agent:${config.$name}`;
    }else {
      this.name = `$agent:${this.uniKey}`;
    }

    this.init();
  }
  
  mixAgent(name, config) {
    if (!context._declareAgent[name]) {
      throw new Error(`unknown mixAgent type ${name}`);
    }
    const _mixAgent = context._declareAgent[name](config, this._viewKey, this.controller, this.view);
    
    this.onViewReady = monkey(this.onViewReady, null, function(result) {
      _mixAgent.onViewReady();
      return result;
    });
    
    this.onViewChange = monkey(this.onViewChange, null, function(result) {
      _mixAgent.onViewChange();
      return result;
    });
    
    this.onViewOff = monkey(this.onViewOff, null, function(result) {
      _mixAgent.onViewReady();
      return result;
    });
    
    return _mixAgent;    
  }

  init() {
    errorLog('agent must implement method init');
  }

  createModel() {
    errorLog('agent must implement method createModel');
    return {};
  }
  
  updateViewModel() {
    if(this._invalid) {
      return;
    }
    clearTimeout(this._updateTimeout);
    const updateInterval = this._updateTimeout === null ? 0 : context.updateInterval;
    this._updateTimeout = setTimeout(() => {
      if (!this._invalid && this._viewReady) {
        this.view.onModelChange(this.createModel());
        this._updateTimeout = null;
      }
    }, updateInterval);
  }

  onViewReady() {
    if(this._invalid || this._viewReady){
      return;
    }
    this._viewReady = true;
    this.updateViewModel();
  }
  
  onViewChange() {
    if(this._invalid) {
      return;
    }
    this.updateViewModel();
  }
  
  onViewOff() {
    if(this._invalid) {
      return;
    }
    this.destroy();
  }

  destroy() {
    clearTimeout(this._updateTimeout);
    if(this._invalid) {
      return;
    }
    this._invalid = true;
    this.controller.destroy();
  }
}

Object.defineProperty(Agent, 'Emitter', {
  enumerable: true,
  set: function (value){
    context._Emitter = value;
    manager = new Store();
    manager.destroy = blank;
    Agent.manager = context.manager = manager;  
  },
  get: function (){
    return context._Emitter;
  },
});

context._declareAgent = {
  $store: class StoreAgent extends Agent {
    init() {
      const dataNames = this.store.dataNames;
      const {when, on} = this.controller;
      
      const updateViewModel = () => {
        this.updateViewModel()
      };
      
      dataNames.forEach(name => {
        when(name, updateViewModel);
        on(`$status:${name}`, updateViewModel);
      });
    }
    
    createModel() {
      const model = {};
      this.store.dataNames.forEach(dataName => {
        const $dataName = `$${dataName}`;
        const _dataName = `_${dataName}`;
        
        model[dataName] = this.store.model[dataName];
        model[$dataName] = this.store.model[$dataName];
        model[_dataName] = this.store.model[_dataName];
      });     
      return model;
    }
  }
};

Agent.declare = (name) => {
  return (SomeAgent) => {
    context._declareAgent[name] = SomeAgent;
  }
};

Agent.createView  = (name = null, option = {}) => {
  const view = option.$view || {};
 
  let initViewAfter = null;
  let viewReadyAfter = null;
  let viewChangeAfter = null;
  let viewOffAfter = null;
  
  view.interfere = view.interfere || same;
  view.checkReRender = view.checkReRender || trne;
  view._option = option;
  
  const $viewConfig = option.$viewConfig || {};

  if (!noValue(name)) {
    if (!context._declareAgent[name]) {
      throw new Error(`unknown Agent type ${name}`);
    }
    
    initViewAfter = function(result) {
      this.agent = new context._declareAgent[name]($viewConfig, this.uniKey, this.controller, this);     
      if($viewConfig.$interfere) {
        view.interfere = monkey($viewConfig.$interfere, null, view.interfere);
      }      
      return result;
    };
    
    viewReadyAfter = function(result) {
      this.agent.onViewReady();
      return result;
    };
    
    viewChangeAfter = function(result) {
      this.agent.onViewChange();
      return result;
    };
    
    viewOffAfter = function(result) {
      this.agent.onViewOff();
      return result;
    };
  }

  view.initView = monkey(view.initView, function([config, store]) {
    if(this._inited || this._invalid) {
      return STOPRUN;
    }
    
    this._inited= true;
    this._ready = false;
    this._invalid = false;
    this._config = config;
    
    this.uniKey = uniRandom();
    this.store = store;
    this.controller = store.controller();
    this.size = {w: 0, h: 0};
 
    return [config, store];
  }, initViewAfter);

  view.viewReady = monkey(view.viewReady, function(args) {
    if(!this._inited){
      errorLog(`view ready must after init.`);
      return STOPRUN;
    }
    if(this._invalid || this._ready) {
      return STOPRUN;
    }
    this._ready = true;
    this.store.emit(`$viewReady:${this.uniKey}`);
    return args;
  }, viewReadyAfter);
    
  view.viewChange = monkey(view.viewChange, function(args) {
    if(this._invalid) {
      return STOPRUN;
    }
    if(!this._inited) {
      errorLog(`view change must after init.`);
      return STOPRUN;
    }
    this.store.emit(`$viewChange:${this.uniKey}`);
    return args;
  }, viewChangeAfter);
    
  view.viewOff = monkey(view.viewOff, function(args) {
    if(this._invalid){
      return STOPRUN;
    }
    this.store.emit(`$viewOff:${this.uniKey}`);
    this._invalid = true;
    return args;
  }, viewOffAfter);  
  
  if(view.onModelChange) {
    view.onModelChange = monkey(view.onModelChange, function([model]) {
      if(!this._ready || this._invalid || view.checkReRender(model) === false) {
        return STOPRUN;
      }
      return [Object.freeze({...view.interfere(model)})];
    });
  } else {
    errorLog(`view must implement onModelChange`);
    view.onModelChange = blank;
  }

  return view;
};

Agent.store = (config, option={}) => {
  if(!config) {
    throw new Error('Agent.store require (config)');
  }
  return (Component) => {
    option.$store = new Store(config);
    return Agent.component('$store', option)(Component);
  } 
}

context._commonConfig = {};
Agent.commonConfig = (config) => {
  if(noValue(config)){
    return Object.freeze({...context._commonConfig});
  }
  context._commonConfig = config;
  manager && manager.emit('$commonConfig', Object.freeze({...config}));
};

context._componentsConfig = {};
Agent.componentsConfig = (config) => {
  if(noValue(config)){
    return Object.freeze({...context._componentsConfig});
  }
  context._componentsConfig = config;
  manager && manager.emit('$componentsConfig', Object.freeze({...config}));
};

context._menuConfig = {};
Agent.menuConfig = (config) => {
  if(noValue(config)){
    return Object.freeze({...context._menuConfig});
  }
  context._menuConfig = config;
  manager && manager.emit('$menuConfig', Object.freeze({...config}));
};

Agent.router = () => {
  errorLog('must implement Agent.router first');
};

Agent.ajax = () => {
  errorLog('must implement Agent.ajax first');
};

Agent.component = () => {
  errorLog('must implement Agent.component first');
};

export * from './Utils';
export {
  manager,
  Store,
  Agent
};
