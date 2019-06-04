import Vue from 'vue'
import Vuex from 'vuex'
import discover from './discover'
import zdw from "./store-zdw/index"
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    discover,
    zdw,
  }
})
