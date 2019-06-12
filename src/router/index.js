import Vue from 'vue'
import Router from "vue-router";
import discover from "./discover"
import discoverShopping from './shopping'
import search from './search'
import informations from './informations'
import newDetail from './information_newDetail'
import BuyTicket from "./BuyTicket"
import cinemaSearch from "./cinemaSearch"
import homePage from "./homePage/index"
import watchMovie from './watchMovie/watchMovie'
import movieList from './movieList/movieList'
import smallVideo from './smallVideo/smallVideo'
import filmReview from './filmReview/filmReview'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path:"/",
      redirect:"/FP"
    },
    discover,
    discoverShopping,
    search,
    informations,
    newDetail,
    cinemaSearch,
    BuyTicket,
    homePage,
    watchMovie,
    movieList,
    smallVideo,
    filmReview
  ]
})
