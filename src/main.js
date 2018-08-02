// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/js/hotcss.min'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.filter('turnTime',(val)=>{
  let date = new Date(val * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  let D = date.getDate() + ' ';
  let h = date.getHours() + ':';
  let m = date.getMinutes();
  let s = date.getSeconds();
  return Y+M+D+h+m;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
