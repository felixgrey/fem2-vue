// 1 安装依赖的npm包
// npm install --save-dev babel-cli babel-preset-env
// npm install --save-dev babel-preset-stage-0
// npm install --save-dev babel-register
// npm install --save babel-polyfill
// npm install --save bufferhelper

// 2 配置 .babelrc
/*
 {
   "presets": [
     "env",
     "stage-0"
   ]
 }
*/

require('babel-polyfill');
require('babel-register');
var fs = require('fs');
var http = require('http');
var BufferHelper = require('bufferhelper');
var fem2DataVisualizationCore = require ('./components/common/fem2DataVisualization/core');

var transform = fem2DataVisualizationCore.transform;

http.get({
  host: 'localhost',
  path: '/v2/api-docs',
  port: '8080',
  headers: {
      'Content-Type': 'application/json',
      'charset': 'UTF-8'
  }
}, function(res) {
  var bufferHelper = new BufferHelper();
  res.on("data", function(chunk){
      bufferHelper.concat(chunk);
  });
  
  res.on('end', function() {

    var apiData = JSON.parse(bufferHelper.toBuffer().toString('UTF-8'));
    
    var apiList = transform.process(apiData.paths)
      .fromObject('path')
      .fromStructInArray([
        {from: 'path', to: 'path'},
        {from: 'get.tags.0|post.tags.0', to: 'tag'},
        {from: 'get.description|post.description', to: 'desc'}
      ]).outPut().map(item => {
        var name = item.path.split('/').pop().replace(/(-\w)/g,(a) => {return a.replace('-','').toUpperCase()});
        return `  /* \n  ${name}: { // ${item.desc || '-'} \n    type: "${item.path.replace('/api/v1/', '')}",   \n  }, \n  */\n  "${item.path}", `;
      });
    
    fs.writeFile('./components/business/services/apiList.js',`export default [\n ${apiList.join('\n')} \n];\n`, 'UTF-8', function(err) {
      if(!err){
        console.log('创建apiList.js成功');
        return;
      }
      console.log(err);
    })

  }) 
});

 
