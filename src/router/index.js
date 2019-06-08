import Vue from 'vue'
import Router from "vue-router";
<<<<<<< HEAD
import discover from "./discover"
import discoverShopping from './shopping'
import search from './search'
import informations from './informations'
import newDetail from './information_newDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/",
      redirect:"/discover"
    },
    discover,
    discoverShopping,
    search,
    informations,
    newDetail
=======
import BuyTicket from "./BuyTicket"
import cinemaSearch from "./cinemaSearch"
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path:"/",
      redirect:"/BuyTicket"
    },
    cinemaSearch,
    BuyTicket
>>>>>>> tshs
  ]
})
