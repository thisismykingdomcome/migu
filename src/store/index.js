import Vue from 'vue'
import Vuex from 'vuex'
import discover from './discover'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    discover
  }
})
