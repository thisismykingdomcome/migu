import Vue from 'vue'
import Router from "vue-router";
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
  ]
})
