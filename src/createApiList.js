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
    ["env", {
      "useBuiltins": true,
      "targets": {
        "node": "current"
      }
    }], "stage-0"
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
        {from: '1', to:'type', set:(v, item) => { return item.get ? 'get' : 'post'}},
        {from: 'get.tags.0|post.tags.0', to: 'tag'},
        {from: 'get.parameters|post.parameters', to: 'parameters'}, 
        {from: 'get.description|post.description', to: 'desc', default: '-'}
      ])
      .transform({
        groupFields: ['tag'],
        valueFields: ['apiList'],
        aggregate: {
          apiList: transform.AGGREGATES.origin
        },
      })
      .operate(source => source.list)
      .toObject('tag', 'apiList')
      .outPut();
      
    const apiJson = JSON.stringify(apiList, null, 2);
    var fileText = `/*  自动生成的文件,勿动  */\n\nexport default ${apiJson};\n`;
    
    console.log(fileText);
    return;
    
    fs.writeFile('./components/business/services/apiList.js',fileText, 'UTF-8', function(err) {
      if(!err){
        console.log('创建apiList.js成功');
        return;
      }
      console.log(err);
    })

  }) 
});

 
