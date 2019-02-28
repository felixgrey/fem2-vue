
export default function(pageExports) {

  const routes = [];

  // 遍历文件
  pageExports.keys().forEach(fileName => {    
    // 获取模块输出
    const exports = pageExports(fileName);
    // 默认模块名
    const defaultName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1');
    // 模块自定义或默认的路由配置
    const {
      key = defaultName,
      path = `/${defaultName}`,
      name = defaultName,
      icon = null,
      hidden = false,
      hiddenChildren = false,
      detail = false,
      parentKey = null
    } = exports.$Register || {};
    // 连同目录信息加入路由列表
    routes.push({path, component: exports.default, key, name, icon, hidden, hiddenChildren, detail, parentKey});
  });
  
  return routes;
}
