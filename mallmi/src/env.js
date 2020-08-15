/* 环境设置文件,根据是开发环境还是生产环境配置不同的url地址,这个文件只在CORS跨域和JSONP跨域的方式使用 */
let basrUrl;
switch (process.env.NODE_ENV) {
  // 获取到当前nodejs中的环境变量
  // 然后再main.js文件中引入配置basrUrl
  case 'development':
    basrUrl = 'http"//dev-mall-pre.springboot.cn/api';
    break;
  case 'test':
    basrUrl = 'http"//test-mall-pre.springboot.cn/api';
    break;
  case 'prod':
    basrUrl = 'http"//prod-mall-pre.springboot.cn/api';
    break;
  default:
    basrUrl = 'http"//mall-pre.springboot.cn/api';
    break;
}

export default {
  basrUrl
}