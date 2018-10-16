// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/js/hotcss.min'
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BackTop from './components/BackTop'

import createStore from './store/store'
import createRouter from './router/index'

const store = createStore()
const router = createRouter()
Vue.use(VueAxios, axios)
// Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.component('BackTop', BackTop)

Vue.filter('turnTime', (val) => {
  let date = new Date(val * 1000)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate() + ' '
  let h = date.getHours() + ':'
  let m = date.getMinutes()
  return Y + M + D + h + m
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



router.beforeEach((to, from, next) => {
  // ...

  console.log(to)
  console.log(1)
  next()
})

router.afterEach((to, from) => {
  // ...
  console.log(to)
  console.log(3)
})

router.beforeResolve((to, from, next) => {
  // ...
  console.log(to)
  console.log(2)
  next()
})

// router.beforeRouteEnter((to, from, next) => {
//   // ...
//   console.log(to)
//   next()
// })


// router.beforeRouteUpdate((to, from, next) => {
//   // ...
//   console.log('routeUpdate')
//   next()
// })
