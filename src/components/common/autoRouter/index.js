
export const routes = [];

export default function(pageExports) {
  // 遍历文件
  pageExports.keys().forEach(fileName => {    
    // 获取模块输出
    const exports = pageExports(fileName);
    // 默认模块名
    const defaultName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1');
    // 模块自定义或默认的路由配置
    const {path = `/${defaultName}`} = exports.$Doc || {};
    routes.push({path, component: exports.default, _doc: exports.$Doc});
  });
  
  return routes;
}
