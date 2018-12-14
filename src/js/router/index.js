import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 异步加载路由写法，必须写明 webpackChunkName
const Index = () => import(/* webpackChunkName:'Index' */'../../containers/Index')
const Articles = () => import( /* webpackChunkName:'Articles' */ '../../containers/Articles')
const ArticlesDetail = () => import( /* webpackChunkName:'ArticlesDetail' */ '../../containers/ArticlesDetail')

var routes = [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/articles/:page',
      name: 'articles',
      component: Articles
    },
    {
      path: '/articles',
      redirect: '/articles/1',
      name: 'articlesDefault'
    },
    {
      path: '/articles/detail/:key',
      name: 'detail',
      component: ArticlesDetail
    },
    {
      path: '*',
      redirect: '/'
    }
  ]

export default new VueRouter({routes})
