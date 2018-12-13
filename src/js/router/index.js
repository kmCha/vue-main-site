import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 异步加载路由写法，必须写明 webpackChunkName
const Index = () => import(/* webpackChunkName:'Index' */'../../containers/Index')
const Articles = () => import( /* webpackChunkName:'Articles' */ '../../containers/Articles')

export var routes = [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles,
      meta: {
        title: '文章'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]

export default new VueRouter({routes})
