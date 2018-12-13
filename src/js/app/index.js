// 已经通过 CDN 的方式引入 vue/jq

import Vue from 'vue'
import router from '../router'
import store from '../store'

console.log('**********************')
console.log(__DEBUG)
console.log('**********************')

new Vue({
  el: '#app',
  router,
  store,
  mounted () {
  }
})