import Vue from 'vue'
import Vuex from 'vuex'
import zdw from "./store-zdw/index"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    zdw
  }
})
