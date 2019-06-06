import Vue from 'vue'
import Router from "vue-router";

import homePage from "./homePage/index"

import watchMovie from './watchMovie/watchMovie'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/",
      redirect:"/FP"
    },
    
    homePage,
    
    watchMovie
  ]
})
