import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 异步加载路由写法，必须写明 webpackChunkName
const Index = () => import(/* webpackChunkName:'Index' */'@/containers/Index')

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
