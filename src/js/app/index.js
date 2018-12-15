import Vue from 'vue'
import router from '../router'
import store from '../store'

// antD-vue
import {
  Layout,
  Menu,
  Breadcrumb,
  Card,
  Divider,
  Tag,
  Icon,
  Pagination,
  BackTop,
  Collapse
} from 'ant-design-vue'
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(Card)
Vue.use(Divider)
Vue.use(Tag)
Vue.use(Icon)
Vue.use(Pagination)
Vue.use(BackTop)
Vue.use(Collapse)

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