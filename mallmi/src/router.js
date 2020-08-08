// 路由配置文件, 路由的封装
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/home';
import Index from './pages/index';
import Product from './pages/product';
import Details from './pages/details';
import Login from './pages/login';
import Carts from './pages/carts';
import Order from './pages/order';
import Ordrlist from './pages/orderlist';
import Ordrconfirm from './pages/orderconfirm';
import Ordrpay from './pages/orderpay';
import Alipay from './pages/alipay';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    // 首页路由
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/product/:id', // 动态路由
          name: 'product',
          component: Product
        },
        {
          path: '/details/:id', // 动态路由
          name: 'details',
          component: Details
        }
      ]
    },

    // 登录路由
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    // 购物车路由
    {
      path: '/carts',
      name: 'carts',
      component: Carts
    },

    // 订单路由
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: '/ordrlist',
          name: 'ordrlist',
          component: Ordrlist
        },
        {
          path: '/ordrconfirm',
          name: 'ordrconfirm',
          component: Ordrconfirm
        },
        {
          path: '/ordrpay',
          name: 'ordrpay',
          component: Ordrpay
        },
        {
          path: '/alipay',
          name: 'alipay',
          component: Alipay
        }
      ]
    }
  ]
});
