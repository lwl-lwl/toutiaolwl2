// 安装引入
import VueRouter from 'vue-router'
// 使用
import Vue from 'vue'
// 引入登录页面组件
import Login from '@/views/login'

import Notfund from '@/views/404'
import Home from '@/views/home'

Vue.use(VueRouter)
// 实例化路由并导出
export default new VueRouter({
  routes: [
    {
      // 导入main.js
      // 登录页面一级路由 配置路由
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '*',
      component: Notfund
    }
  ]
})
