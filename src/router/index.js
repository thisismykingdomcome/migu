import Vue from 'vue'
import Router from "vue-router";
import discover from "./discover"
import homePage from "./homePage/index"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/",
      redirect:"/FP"
    },
    discover,
    homePage
  ]
})
