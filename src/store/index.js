import Vue from 'vue'
import Vuex from 'vuex'

import discover from './discover'
import BuyTicket from "./BuyTicket"
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    discover,
    BuyTicket
  }
})
