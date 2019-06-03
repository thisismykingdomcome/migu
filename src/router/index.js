import Vue from 'vue'
import Router from "vue-router";
import discover from "./discover"
import discoverShopping from './shopping'
import homePage from "./homePage/index"

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
    homePage
  ]
})
