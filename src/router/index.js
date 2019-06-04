import Vue from 'vue'
import Router from "vue-router";
import discover from "./discover"
<<<<<<< HEAD
import discoverShopping from './shopping'
<<<<<<< HEAD
import homePage from "./homePage/index"

=======
import search from './search'
import informations from './informations'
>>>>>>> lqd
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/",
      redirect:"/shopping"
    },
    discover,
    discoverShopping,
<<<<<<< HEAD
    homePage
=======
    search,
    informations
>>>>>>> lqd
=======
import homePage from "./homePage/index"
import BuyTicket from "./BuyTicket"
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path:"/",
      redirect:"/BuyTicket"
    },
    discover,
    homePage,
    BuyTicket
>>>>>>> tsh
  ]
})
