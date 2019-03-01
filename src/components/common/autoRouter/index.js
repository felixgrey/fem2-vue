
export const routes = [];
     
export default function(pageExportsContext) {
  if(typeof pageExportsContext !== 'function' || pageExportsContext.name !== 'webpackContext') {
    throw new Error('only webpackContext can use autoRouter');
  }

  // 遍历webpack模块
  pageExportsContext.keys().forEach(fileName => { 
    //忽略以_开头的文件和文件夹
    if(/\/_/g.test(fileName)){
      return;
    }  
    // 默认模块名
    const defaultName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1');
    // 获取模块输出
    const exports = pageExportsContext(fileName);
    // 模块自定义或默认的路由配置
    const _doc = exports.$Doc === undefined ? {} : exports.$Doc;
    const {path = `/${defaultName}`} = _doc || {};   
    routes.push({path, component: exports.default, _doc});  
  });
  
  return routes;
}
