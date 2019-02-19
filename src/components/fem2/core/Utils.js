
export const context = {};

export function noValue(value){
  return (value === null || value === undefined);
}

export function removeArrayItem(arr, item){
  if(noValue(arr)) {
    return false;
  }
  
  let index = arr.indexOf(item);
  if(index > -1 ){
    arr.splice(index, 1);
    return true;
  }
  
  return false;
}

export function blank() {}
export function same(a) {return a}
export function nuII() { return null}
export function trne() { return true}
export function falze() { return false}

let errorLog = blank;
if (process.env.NODE_ENV === 'development' && console && typeof global.console.error === 'function') {
  errorLog = function(...args){global.console.error('【fem-WARING】:',...args)};
}

export {errorLog};

context._Emitter = class MockEmitter{
  constructor(){
    errorLog(`This is MockEmitter`);
  }
  on(){}
  once(){}
  emit(){}
  off(){}
};

context.updateInterval = 20;

export const localBaseUrl = (() => {
  let {protocol = '', hostname = '', port = ''} = global.location || {};
  return `${protocol}//${hostname}${port ? (':' + port) : ''}`;
})();


const uniBaseIndex = Date.now();
let uniBaseIndexNext = 0;
export function uniRandom() {
  return uniBaseIndex + (uniBaseIndexNext++); 
}

context.STOPRUN = uniRandom();

export function monkey(fun = blank, before, after) {
  return function proxyFun(...args) {
    let _args = args;
    if (before) {
      _args = before.bind(this)(args);
      if(_args === context.STOPRUN){
        return args;
      }
    }

    let result = fun.apply(this, _args);
    if (after) {
      return after.bind(this)(result, _args, args);
    }
    return result;
  }
}

export function arrToObj(arr, key){
  let obj = {};
  arr.forEach((item)=>{ obj[item[key]] =item });
  return obj;
}

export function formatPercentNumber(number, fixed = 2, decimal = true, noSymbol = false){
  if(noValue(number)){
    return  '--'+ (noSymbol ? '' : '%');
  }
  number = (+number) * (decimal ? 100 : 1);
  return new Number(number).toFixed(fixed) + (noSymbol ? '' : '%');
}


export function formatCommaNumber(number, fixed = 2){
  if(noValue(number)){
    return  '--';
  }
  number = +number;
  let number2 = parseInt(number);
  let decimal = number - number2;

  if(global.isNaN(number) || global.isNaN(number2) || global.isNaN(decimal)){
      return  '--';
  }

  number2 = Array.from(number2+'').reverse().map((c, index) => {
    if(index!==0 && index%3 === 0){
      return c + ',';
    }
    return c;
  }).reverse().join('');

  if (decimal) {
    return number2 + new Number(decimal).toFixed(fixed).replace('0.','.');
  }

  return number2
}

export class Chronograph {
  constructor(interval = 20) {
    this.interval = interval;
    this.times = 0;
    this.intervalIndex = -1;
  }

  pulseHandle(){

  }

  end() {
    this.times = 0;
    clearInterval(this.intervalIndex);
  }

  setInterval(interval = 20){
    this.end();
    this.interval = interval;
  }

  start() {
    this.end();
    this.intervalIndex = setInterval(()=>{
      this.pulseHandle(this.times++);
    },this.interval);
  }
}

export function doubleMode(param, fun = same) {
  if(typeof param !== 'function'){
    return fun(param);
  }
  return param;
}

export function mergeConfig(obj ={}, cfg = {}, defaultValue = {}) {
  for (let name in cfg) {
    const _name = `_${name}`;
    if(obj[_name] === undefined) {
      obj[_name] = cfg[name] === undefined ? defaultValue[name] : cfg[name];
    }
  }
  
  for (let name in defaultValue) {
    const _name = `_${name}`;
    if(obj[_name] === undefined) {
      obj[_name] = defaultValue[name];
    }
  }
  
  return obj;
}
