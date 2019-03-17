let _Emitter = null;

const emitterMethods = ['on', 'once', 'emit', 'off', 'destroy'];
const statusList = ['undefined', 'loading', 'locked', 'set']; 

let storeKey = 1;

export function noValue(value) {
  return value === null || value === undefined;
}

export function blank(){}

let errorLog = blank;
if (process.env.NODE_ENV === 'development' && console && typeof global.console.error === 'function') {
  errorLog = function(...args){global.console.error('【marine-WARING】:', ...args)};
}

const stopRun = Math.random() * 10e6;
export {
  errorLog,
  stopRun}
;

export class Executor {
  constructor() {
    this._invalid = false;
    this._before = {};
    this._after = {};
    this._runner = {};
  }
  
  runner(name, fun) {
    if (this._invalid || noValue(name) || this._runner[name]) {
      return;
    }
    
    if(fun === false) {
      delete this._before[name];
      delete this._after[name];
      delete this._runner[name];
      return;
    }
    
    this._runner[name] = fun;
  }
  
  before(name, fun) {
    if (this._invalid || noValue(name) || !this._runner[name]) {
      return;
    }
    
    this._before[name] = this._before[name] || [];
    this._before[name].push(fun);
    
    return () => {
      if (this._invalid || !this._before[name]) {
        return;
      }
      const i = this._before[name].indexOf(fun);
      if(i !== -1){
        this._before[name].selice(i, 1);
      }
    }
  }
  
  after(name, fun) {
    if (this._invalid || noValue(name) || !this._runner[name]) {
      return;
    }
    
    this._after[name] = this._after[name] || [];
    this._after[name].push(fun);
    
    return () => {
      if (this._invalid || !this._after[name]) {
        return;
      }
      const i = this._after[name].indexOf(fun);
      if(i !== -1){
        this._after[name].selice(i, 1);
      }
    }
  }
  
  run(name, ...args){
    if (this._invalid || noValue(name) || !this._runner[name]) {
      return;
    }
    
    const befores = this._before[name] || [];
    let newArgs = args;
    for (let before in befores) {
      newArgs = before(newArgs, args);
      if(newArgs === stopRun) {
        return stopRun;
      }
    }
    
    const result = this._runner[name](...newArgs);
    const afters = this._after[name] || [];
    let newResult = result
    for (let after in afters) {
      newResult = after(newResult, result, newArgs, args);
    }
    
    return newResult;
  }
  
  destroy(name) {
    if (this._invalid || noValue(name)) {
      return;
    }
    this._invalid = true;
    this._before = null;
    this._after = null;
    this._runner = null;
  }
}

class Controller {
  constructor(store) {
    this._store = store;
    this.executor = new Executor();
    this._emitter = store._emitter;
    this._invalid = false;
    this._offList = [];
  }
  
  destroy() {
    if (this._invalid) {
      return;
    }
    this._invalid = true;
    
    this._offList.forEach(off => off());
    this.executor.destroy();
    
    this._offList = null;
    this._store = null;
    this._emitter = null;
    this.executor = null;
  }
  
  on = (name, callback) => {
    if (this._invalid) {
      return;
    }
    this._emitter.on(name, callback);
    return () => {
      this._emitter.off(name, callback);
    }
  }
  
  once = (name, callback) => {
    if (this._invalid) {
      return;
    }
    this._emitter.once(name, callback);
    return () => {
      this._emitter.off(name, callback);
    }
  }
  
  watch = (callback) => {
    if (this._invalid) {
      return;
    }
    this._store.modelNames.forEach((modelName) => {
      this.when(modelName, () => {
        callback(Object.freeze({...this._store.model}));
      });
    });  
  }
  
  when = (name, callback, _once = false)  => {
    if (this._invalid) {
      return;
    }
    let fun = _once ? 'once' : 'on';
    
    const wrapedCallback = () => {
      if (this._invalid) {
        return;
      }
      callback({
        model: this._store.model[name],
        list: this._store.model[`${name}List`]
      });
    }
    
    if (this._store.model[`${name}Status`] === 'set') {
        wrapedCallback();
        if (_once) {
          return blank;
        }
    }

    return this[fun](`$dataChange:${name}`, wrapedCallback);
  }
  
  load = (name, callback)  => {
    return this.when(name, callback, true);
  }

  submit = (...args)  => {
    if (this._invalid) {
      return;
    }
    return this._store._submit(...args);
  } 
}

export default class Store {
  constructor(config) {
    if (!_Emitter) {
      throw new Error('must implement Emitter first');
    }
    
    if (!config) {
      throw new Error('store must has config');
    }
    
    Object.defineProperty(this, 'myKey', {
      value: storeKey++,
      writable: false
    });
    
    this.model = {};
    this.modelNames = [];
    
    this._emitter = new _Emitter();
    this._config = config;
    
    this._data = {};
    this._status = {};
   
    this._invalid = false;
    this.myController = this.controller();
    
    this._init(config);
  }
  
  _init(config) {
    const {when} = this.myController;
    
    for (let modelName in config) {
      if (/^\$|^_/g.test(modelName)) {
        continue;
      }      
      this.defineModel(modelName);
      this.modelNames.push(modelName);
      
      let {
        type,
        default: _default,
        reset,
        snapshot,
        filter = [],
        dependence = []
      } = config[modelName];
      
      if (!noValue(reset)) {
        reset = [].concat(reset);
        reset.forEach(name => {
          when(name, () => {
            this.model[`${modelName}List`] = !noValue(_default) ? [].concat(_default) : []
          })
        })      
      }
      
      if (!noValue(snapshot)) {
        snapshot = [].concat(snapshot);
        snapshot.forEach(name => {
          when(name, () => {
            this.model[`${modelName}List`] =JSON.parse(JSON.stringify(this.model[`${name}List`]));
          })
        })      
      }
      
      if (!noValue(type)) {
        
        const submitCallback = () => {
          const paramModel = {};
          const params = {};
          
          for (let fName of filter) {
            paramModel[fName] = this.model[fName];
            Object.assign(params, this.model[fName]);
          }
          
          for (let dName of dependence) {
            if(this.model[dName] === undefined ) {
              if(!noValue(this.model[modelName])){
                this.model[`${modelName}List`] = [];
              }
              return;
            }
            paramModel[dName] = this.model[dName];
            Object.assign(params, this.model[dName]);
          }

          clearTimeout(this._lagFetchIndex);
          this._lagFetchIndex = setTimeout(() => {
            if(this.model[`${modelName}Status`] === 'loading'){
              errorLog(`can not fetch ${modelName} when it is loading`);
              return;
            }
            this.model[`${modelName}Status`] = 'loading';
            
            Promise.resolve(this._fetch(type, {
                type,
                params,
                paramModel,
                model: this.model[modelName],
                modelList: this.model[`${modelName}List`]
              })
            ).then((newModel) => {
              if(newModel === undefined){
                throw new Error(`${modelName} can not be undefined`);
              }
              this.model[`${modelName}List`] = [].concat(newModel);
            }).catch((e) => {
              this.model[`${modelName}Status`] = 'set';
              throw new Error(e);
            });
          }, 20);
        }

        const watchList = dependence.concat(filter);
        
        watchList.forEach(_name => {
          this.defineModel(_name);
          when(_name, submitCallback);
        });
        submitCallback();
        
      } else if (_default !== undefined) {
        this.model[`${modelName}List`] = [].concat(_default);
      }
    }
  }
  
  _fetch(name, ...args) {
    return Store.globalStore.myController.executor.run(name, ...args);
  }
  
  _submit(param) {
    if (this._invalid) {
      return;
    }
    
    const {
      type,
      params = {},
      lock = [],
      data = {}
    } = param;
    
    const oldList = lock.map(name => {  
      const nameStatus = `${name}Status`;
      const old = this.model[nameStatus];
      this.model[nameStatus] = 'lock';
      return {old, nameStatus };
    });
    
    const oldCallback = () => {
      oldList.forEach(({old, nameStatus}) => {
        this.model[nameStatus] = old;
      });
    }
    
    return Promise.resolve(this._fetch(type, {
      type,
      params,
      _submit: true,
      model: data,
      modelList: [].concat(data)
    })).then(result => {
      oldCallback();
      return result;
    }).catch(e => {
      oldCallback();
      throw new Error(e);
    });
  }
  
  _checkChange() {
    return true;
  }

  defineModel(name, def = true) {
    if (this._invalid) {
      return;
    }
    
    if (!def && this.model.hasOwnProperty(name)) {
      this._emitter.emit(`$modelRemoved:${name}`);
      delete this.model[name];
      delete this.model[`${name}List`];
      delete this.model[`${name}Status`];
      delete this._data[name];
      return;
    }
    
    if (this.model.hasOwnProperty(name)) {
      return;
    }
    
    this._data[name] = [];
    
    Object.defineProperty(this.model, name, {
      enumerable: true,
      get: () => {
        if(this._invalid) {
          return undefined;
        }
        return this._data[name][0]
      },
      set: (newValue) => {
        if(this._invalid) {
          return undefined;
        }
        if(newValue === undefined) {
          throw new Error(`${name} can not be undefined`);
        }
        const oldValue = this._data[name][0];
        if (typeof newValue === 'function') {
          newValue = newValue(oldValue);
        }
        if(this._checkChange(newValue, oldValue)){
          this._data[name][0] = newValue;
          if(this._status[name] !== 'set') {
            this._status[name] = 'set';
            this._emitter.emit(`$statusChange:${name}`);
          }
          this._emitter.emit(`$dataChange`);
          this._emitter.emit(`$dataChange:${name}`);
        }
      }
    });
    
    Object.defineProperty(this.model, `${name}List`, {
      enumerable: true,
      get: () => {
        if(this._invalid) {
          return undefined;
        }
        return this._data[name];
      },
      set: (newValue) => {
        if(this._invalid) {
          return;
        }     
        if(newValue === undefined) {
          throw new Error(`${name}List can not be undefined`);
        }
        const oldValue = this._data[name];
        if (typeof newValue === 'function') {
          newValue = newValue(oldValue);
        }
        if(this._checkChange(newValue, oldValue)){
          this._data[name] = newValue;
          if(this._status[name] !== 'set') {
            this._status[name] = 'set';
            this._emitter.emit(`$statusChange:${name}`);
          }
          this._emitter.emit(`$dataChange`);
          this._emitter.emit(`$dataChange:${name}`);
        }
      }
    });
    
    Object.defineProperty(this.model, `${name}Status`, {
      enumerable: true,
      get: () => {
        if(this._invalid) {
          return 'undefined';
        }
        return this._status[name] || 'undefined';
      },
      set: (newStatus) => {
        if(this._invalid) {
          return;
        }
        if(statusList.indexOf(newStatus) === -1) {
          throw new Error(`${name}Status must one of ${statusList.join(',')}`);
        }
        const oldStatus = this._status[name];
        if(oldStatus !== newStatus){
          this._status[name] = newStatus;
          this._emitter.emit(`$statusChange:${name}`);
        }
      }
    });   
  }
  
  controller() {
    if(this._invalid) {
      return;
    }
    return new Controller(this);
  }
  
  destroy() {
    if(this._invalid) {
      return;
    }
    this._invalid = true;
    clearTimeout(this._lagFetchIndex);
    this._emitter.emit('$storeDestroy');
    this._emitter.destroy();
    this._emitter = null;
    this._config  = null;
    this._data  = null;
    this._status = null;
    this.model = null;
    this.modelNames = null;
  } 
}

Store.inject = () => blank;

Object.defineProperty(Store, 'Emitter', {
  set: (Emitter) => {
    if(_Emitter) {
      throw new Error('Emitter has implemented');
    }
    
    const _pe = Emitter.prototype;
    emitterMethods.forEach(name => {
      if(typeof _pe[name] !== 'function'){
        throw new Error(`Emitter must implement ${emitterMethods.join(',')}`);
      }
    });
    
    _Emitter = Emitter;
    
    Object.defineProperty(Store, 'globalStore', {
      value: new Store({}),
      writable: false
    });
    
    Store.globalRunner = (...args) => Store.globalStore.myController.executor.runner(...args);  
  },
  get: () => {
    return _Emitter;
  }
});

