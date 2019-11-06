// 安装引入
import VueRouter from 'vue-router'
// 使用
import Vue from 'vue'
// 引入登录页面组件
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import Notfund from '@/views/404'
import local from '@/utils/local'
import Article from '@/views/article/article'
import Image from '../views/image'
import Publish from '@/views/publish'
import Comment from '@/views/comment'
import Setting from '@/views/setting'
Vue.use(VueRouter)
// 实例化路由并导出
const router = new VueRouter({
  routes: [
    {
      // 导入main.js
      // 登录页面一级路由 配置路由
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', component: Welcome },
        { path: '/article', component: Article },
        { path: '/image', component: Image },
        { path: '/publish', component: Publish },
        { path: '/comment', component: Comment },
        { path: '/setting', component: Setting }
      ]
    },
    {
      path: '*',
      component: Notfund
    }
  ]
})

export default router
router.beforeEach((to, from, next) => {
  const user = local.getUser()
  if (to.path !== '/login' && !user) return next('/login')
  next()
})
