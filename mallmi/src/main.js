import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios); // 这样可以在所有的页面使用this.axios调用axios来发送请求
Vue.config.productionTip = false; // 生产环境时提示

/* mockjs模拟数据 */
const mock = true; // mock开关
if (mock) {
  require('./mock/api');
}

/* axios拦截器 */
// 响应拦截,错误拦截,一般的都做响应拦截,后台管理系统的时候多数做请求拦截,因为要对表单进行验证处理
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    // 未登录,跳转到登录界面
    window.location.href = '/login';
  } else {
    alert(res.msg);
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
