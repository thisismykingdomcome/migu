import Vue from 'vue'
import Router from "vue-router";
import discover from "./discover"
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
  ]
})
