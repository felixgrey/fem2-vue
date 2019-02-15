import {errorLog} from '../Utils';
import echarts from 'echarts';

export default {
  femViewReady: function(){
    if (!this.store.has(`$executor:$EchartsContainer:${this.uniKey}`, true)) {
      errorLog('EchartsComponent must implement executor:（$EchartsContainer:${this.uniKey}）');
      return;
    }
    this._dom = this.store.run(`$EchartsContainer:${this.uniKey}`);
    
    // TODO: checkSize
    
    // TODO: init
    
  },
  onModelChange: function(option) {
    // TODO: setOption
  },
  femViewChange: function() {
    // TODO: clear
  }
};
