import Vue from 'vue'
import Vuex from 'vuex'


import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    state: defaultState,
    mutations,
    getters,
    actions
    // modules:{
    //     a:{
    //         namespaced: true,
    //         state : {
    //             text : 1
    //         },
    //         mutations:{
    //             updateText(state,text ){
    //                 state.text = text;
    //             }
    //         },
    //         getters : {
    //             textPlus( state,getters,rootState ){
    //                 return state.text + rootState.b.text;
    //             }
    //         },
    //         actions: {
    //             add( {state,commit,rootState} ){
    //                 commit('updateCount',56789,{root:true});
    //             }
    //         }
    //     },
    //     b:{
    //         namespaced: true,
    //         state : {
    //             text : 0
    //         },
    //         actions :{
    //             testAction( {commit} ){
    //                 commit('a/updateText','text text',{root:true})
    //             }
    //         }
    //     }

    // }
  })

  // if (module.hot) {
  //     module.hot.accept([
  //         './state/state',
  //         './mutations/mutations',
  //         './actions/actions',
  //         './getters/getters'
  //     ], () => {
  //         const newState = require('./state/state').default
  //         const newMutations = require('./mutations/mutations').default
  //         const newActions = require('./actions/actions').default
  //         const newGetters = require('./getters/getters').default

  //         store.hotUpdate({
  //             state: newState,
  //             mutations: newMutations,
  //             getters: newGetters,
  //             actions: newActions
  //         })
  //     })
  // }

  return store
}
