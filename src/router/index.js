import Vue from 'vue'
import Router from "vue-router";
import discover from "./discover"
import homePage from "./homePage/index"
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path:"/",
      redirect:"/FP/mainContent"
    },
    discover,
    homePage
  ]
})
