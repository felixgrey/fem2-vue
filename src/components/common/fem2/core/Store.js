
import {context, uniRandom, blank, same, noValue, errorLog, removeArrayItem} from './Utils';

const STATUS = ['undefined','loading','locked','set']; // 状态枚举
const EMITTERMETHODS = ['on', 'once', 'emit', 'off']; // emitter的api
const CONTROLLERMETHODS = ['on', 'when', 'executor','watch']; // controller的api
const STOPRUN = context.STOPRUN;

class Store {  
  constructor(config = {}) {
    this._event = new context._Emitter();
    EMITTERMETHODS.forEach(funName => {
      if(typeof this._event[funName] !== 'function'){
        throw new Error(`Emitter must implement ${funName}`);
      }
    });
    
    this.uniKey = uniRandom();
    this.dataNames = [];
    this.name = noValue(config.$name) ? `$store:${this.uniKey}`: `$store:${config.$name}`;
    this.model = {};

    this._config = config;
    this._invalid = false;
    this._data = {};
    this._updateTimeout = null;

    if(!noValue(config.$checkSame)){
      this._checkSame = config.$checkSame;
    }

    this._init();
  }
  
  _init() {
    const config = this._config;
    
    for (let dataName in config) {
      if(dataName.indexOf('$') === 0 || dataName.indexOf('_') === 0 ) {
        continue;
      }
      
      this.dataNames.push(dataName);
      
      let {
        type ,
        default: _default,
        filter = [],
        dependence = [],     
        transform = same
      } = config[dataName];

      if (!noValue(type)) {
        filter = [].concat(filter);
        filter.forEach( (_when_) => {
          this.default(_when_, (config[_when_] || {}).default);
        });
        dependence = [].concat(dependence);
        
        const _when = dependence.concat(filter);
        const fetchData = () => {
          const statusValue = this._status(dataName);
          if(statusValue === 'loading' || statusValue === 'locked') {
            errorLog(`can not do action ${dataName} when status is ${statusValue}`);
            return;
          }
          this._groupStatus(_when, 'locked');

          const dependenceData = [];
          for (let dependenceName of dependence){
            const dependenceFirst = this._first(dependenceName);
            if((dependenceFirst === undefined )){
              if(this._first(dataName) !== undefined){
                this._set(dataName, [], true);
              }
              return;
            }
            dependenceData.push(dependenceFirst);
          }
          
          const filterData = [];
          for (let filterName of filter) {
            filterData.push(this._first(filterName));
          }

          const currentData = this._get(dataName);
          this._status(dataName, 'loading');
          const actionInfo = {
            uniKey: this.uniKey,
            type,
            d: dependenceData[0] || {},
            f: filterData[0] || {},
            c: currentData[0] || null,
            dependenceData,
            filterData,
            currentData: currentData
          };
          
          if(context.manager && context.manager !== this) {
            return Promise.resolve(context.manager.dispatch(actionInfo)).then((value) => {
              this._set(dataName, transform(value), true);
              this._groupStatus(_when, 'set');
            }).catch((e) => {
              this._status(dataName, 'set');
              this._groupStatus(_when, 'set');
              return Promise.reject(e);
            });
          }

          this._status(dataName, 'set');
          this._groupStatus(_when, 'set');
        };
        
        this.when(_when,() => {
          clearTimeout(this._updateTimeout);
          setTimeout(fetchData, context.updateInterval);         
        });
        
      } else {
        this.default(dataName, _default);
      }
    }
    
    this.dataNames.forEach(name => {
      this.defineModel(name)
    });
  }
  
  removeModel(name){
    const model = this.model;
    delete model[`${name}Data`];
    delete model[`${name}First`];
    delete model[`${name}Status`];
  }
  
  defineModel(name){
    const model = this.model;
    if(model.hasOwnProperty(name)) {
      return;
    }
    
    //全部数据
    Object.defineProperty(model, `${name}List`, {
      configurable: true,
      enumerable: true,
      get: () => {
        return this._get(name);
      },
      set: (value) => {
        if(typeof value === 'function') {
          const oldValue = this._get(name);
          value = value(oldValue) || oldValue;
        }
        this._set(name, value);
      }
    });

    // 第一条数据
    Object.defineProperty(model, name, {
      configurable: true,
      enumerable: true,
      get: () => {
        return this._first(name);
      },
      set: (value) => {
        const oldData = this._get(name);
        const oldValue = oldData[0];

        if (typeof value === 'function') {
          value = value(oldValue) || oldValue;
        }
        
        if (!this._checkSame(oldValue, value)) {
          oldData.splice(0, 1, value);
          this._set(name, oldData, true);
        }
      }
    });

    // 数据状态
    Object.defineProperty(model, `${name}Status`, {
      configurable: true,
      enumerable: true,
      get:() => {
        return this._status(name);
      },
      set:(value) => {
        return this._status(name, value);
      }
    });
  }
  
  controller() {
    if(this.invalid){ 
      return;
    }
    
    let offList = [];   
    const controller = {
      store: this,
      destroy: () => {
        if(offList) {
          offList.forEach(off => off());
          offList = null;
        }   
      }
    };
    
    CONTROLLERMETHODS.forEach(fun => {
      controller[fun] = (...args) => {
        const off = this[fun](...args);
        offList.push(off);
        return off;
      }
    });
    
    return controller;    
  }
  
  _add(scheme, name, fun){
    if(this.invalid || noValue(name)){
      return;
    }
    
    name = `$${scheme}:${name}`;
    if(!this._data[name]){
      this._data[name] = [];
    }
    this._data[name].push(fun);
  }
  
  _groupStatus(names, state){
    if(this.invalid ){ 
      return;
    }
    names.forEach(name => {
      const statusName = `$status:${name}`;
      this._data[statusName] = state;
      this.emit(statusName, state);
    });
  }
  
  _status(name, state, force = false) {
    if(this.invalid || noValue(name)) { 
      return 'undefined';
    }
    
    const statusName = `$status:${name}`;
    const currentState = this._data[statusName];
    
    if(noValue(state)){
      return currentState || 'undefined';
    }  
    
    if(!force && currentState === state) {
      return currentState;
    }
    
    if(STATUS.indexOf(state) === -1) {
      throw new Error(`state of ${name} must be one of ${STATUS.join(',')}`);
    }

    if(this.has(name) && state === 'undefined'){
      throw new Error(`${name} can not be set status 'undefined' when it has value`);
    }
    
    this._data[statusName] = state;
    return this.emit(statusName, state);
    
  }
  
  once(name, callback) {
    return this.on(name, callback, true); 
  }
  
  on(name, callback, _once = false) {
    if(this.invalid || noValue(name)){ 
      return blank;
    }
    this._event[(_once ? 'once' : 'on')](name, callback);
 
    const off = (deleting = false) => {
      this._off(name, callback);
      
      if(!deleting){
        removeArrayItem(this._data[`$off:${name}`] || [], off);
      }
    };
    
    this._add('off', name, off);
    
    return off;
  }
  
  emit(name, ...args) {
    if(this.invalid || noValue(name)){
      return args[0];
    }
    this._event.emit(name, ...args);
    return args[0];
  }

  _off(name, callback) {
    if(this.invalid || noValue(name)) {
      return;
    }

    this._event.off(name, callback);
    if(callback._callback){
      this._event.off(name, callback._callback);
    }
  }
  
  load(name, callback) {
    if(this.invalid || noValue(name)) {
      return blank;
    }
    
    if(this.has(name)) {
      callback(this._get(name));
      return blank;
    }

    return this.when(name, callback, true);
  }
  
  watch(name, callback, _once = false){
    if(this.invalid || noValue(name)){
      return blank;
    }
    name = [].concat(name)[0];
    
    return this.when(name, ([item]) => {
      callback(item);
    }, _once);
  }

  when(name, callback, _once = false) {
    if(this.invalid || noValue(name)){
      return blank;
    }
    
    name = [].concat(name); 
    
    const cbkOuter = () => {
      const values = [];
      for (let _name of name){
        if(!this.has(_name)){
          return;
        }
        values.push(this._get(_name));
      }
      callback(...values);
    }
    
    callback._callback = cbkOuter;
    cbkOuter();
    
    let offList = [];
    for (let _name of name) {
      let off = this[(_once ? 'once' : 'on')](_name, cbkOuter);
      offList.push(off);
    }
    
    return () => {
      offList && offList.forEach(off => off());
      offList = null;
    }
  }

  has(name) {
    if(this.invalid || noValue(name)) {
      return false;
    }
    return !!this._data[`$data:${name}`];
  }
  
  default(name, value = []) {
    if(this.invalid || noValue(name)) {
      return [];
    }
    
    if(this.has(name)) {
      return this._get(name);
    }
    
    return this._set(name, value);
  }
  
  _checkSame(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  _set(name, value, _force = false) {
    if(this.invalid || noValue(name)) {
      return [];
    }

    if(value === undefined) {
      throw new Error(`value of ${name} can not be undefined`);
    }
  
    value = [].concat(value);
    if(!_force && this._checkSame(this._data[`$data:${name}`], value)){
      return;
    }
    
    const statusValue = this._status(name);    
    if(!_force && (statusValue === 'loading' || statusValue === 'locked')) {
      errorLog(`can not set value of ${name} when status is ${statusValue}`);
      return this._get(name);
    }

    this._data[`$data:${name}`] = value;
    this._status(name, 'set');
    return this.emit(name, value);
  }
  
  _get(name, _justName = false) {
    if(this.invalid || noValue(name)) {
      return [];
    }
    name = _justName ? name : `$data:${name}`;
    return this._data[name] || [];
  }
  
  _first(name) {
    return this._get(name)[0];
  }

  snapshot(name, name2) {
    if(this.invalid || noValue(name)){
      return [];
    }
    const snapValue = JSON.parse(JSON.stringify(this._get(name)));
    if(!noValue(name2)){
      this._set(name2, snapValue);
    }
    return snapValue;
  }
  
  submit(actionInfo = {}) {
    if(this.invalid || noValue(actionInfo.type) || !context.manager) {
      return actionInfo;
    }
    
    let lock = [];
    let oldStatus = [];
    if(actionInfo.$lock) {
      lock = [].concat(actionInfo.$lock);
    }
    
    lock.forEach(name => {
      oldStatus.push(this._status(name));
      this._status(name, 'lock');
    });
    
    const unLock = () => {
      lock.forEach((name, index) => {
        this._status(name, oldStatus[index]);
      });
    }
    
    return Promise.resolve(context.manager.dispatch(actionInfo))
    .then(result => {
      unLock();
      return result;
    }).catch((err) => {
      unLock();
      return Promise.reject(err);
    });   
  }
  
  dispatch(actionInfo = {}) {
    const type = actionInfo.type;
    if (this.invalid || noValue(type)) {
      return actionInfo;
    }
   
    const executor = `$executor:${type}`;
    if(!this._data[executor]) {
      return actionInfo;
    }
    
    let _args = actionInfo;
    const before = this._get(`$before:${type}`, true);    
    for (let _before of before) {
      _args = _before(_args, actionInfo)
      if(_args === STOPRUN){
        return actionInfo;
      }
    }
    
    let result = this._data[executor](_args);    
    const after = this._get(`$after:${type}`, true);
    for (let _after of after) {
      result = _after(result, _args, actionInfo);
    }
    
    return result;  
  }
   
  executor(name, fun) {
    if(this.invalid || noValue(name)) {
      return;
    }
    this._data[`$executor:${name}`] = fun;
    
    return () => {
      this.remove(name);
    }
  }

  before(name, fun) {
    if(!this._data[`$executor:${name}`]) {
      return;
    }
    this._add('before', name, fun);
  }
  
  after(name, fun) {
    if(!this._data[`$executor:${name}`]) {
      return;
    }
    this._add('after', name, fun);
  }
 
  remove(name , fun) {
    if(fun) {
      removeArrayItem(this._data[`$before:${name}`], fun);
      removeArrayItem(this._data[`$after:${name}`], fun);
    } else {
      this._delete(`$executor:${name}`);
    }
  }
  
  delete(name) {
    this._delete(`$data:${name}`);
  }

  _delete(name) {
    if(this.invalid || noValue(name)) {
      return;
    }
    
    let name2 = name.split(':')[1];
    
    if(name.indexOf('$data:') === 0){
      this._get(`$off:${name2}`, true).forEach(off => off(true));
      delete this._data[`$off:${name2}`];
      delete this._data[name];
      delete this.model[name];
      delete this.model[`_${name}`];
      this._status(name2, 'undefined');
      return;
    }
    
    if(name.indexOf('$executor:') === 0){
      delete this._data[name];
      delete this._data[`$before:${name2}`];
      delete this._data[`$after:${name2}`];
      return;
    }

    delete this._data[name];
  }
  
  destroy() {
    clearTimeout(this._updateTimeout);
    if (this.invalid) {
      return;
    }
    this.invalid = true; 
    this._data = null;
    this.dataNames = null;
  }
  
}

export default Store;

