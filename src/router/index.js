import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AppIndex from '@/components/AppIndex'
import DetailsPage from '@/components/DetailsPage'
import ReviewDetails from '@/components/ReviewDetails'
import Vuex from 'vuex'

import createStore from '../store/store'

Vue.use(Vuex)
Vue.use(Router)

const store = createStore()

// store.registerModule('c',{
//   state:{
//     text:3
//   }
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppIndex',
      component: AppIndex,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/DetailsPage/',
      name: 'DetailsPage',
      component: DetailsPage
    },
    {
      path: '/ReviewDetails/',
      name: 'ReviewDetails',
      component: ReviewDetails
    }
  ]
})
