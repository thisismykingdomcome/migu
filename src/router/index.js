import Vue from 'vue'
import Router from "vue-router";
import discover from "./discover"
import discoverShopping from './shopping'
import search from './search'
import informations from './informations'
import newDetail from './information_newDetail'
Vue.use(Router)

export default new Router({
  mode: 'hash',
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
  ]
})
