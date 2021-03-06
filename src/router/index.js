import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'
Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })
}


