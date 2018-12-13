// 已经通过 CDN 的方式引入 vue/jq

import Vue from 'vue'
import router from '../router'
import store from '../store'

// antD-vue
import { Layout, Menu, Breadcrumb } from 'ant-design-vue'
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)

// 组件
import App from '../../containers/App.vue'
Vue.component('App', App)

console.log('**********************')
console.log(__DEBUG)
console.log('**********************')

new Vue({
  el: '#wrap',
  router,
  store,
  mounted () {

  }
})