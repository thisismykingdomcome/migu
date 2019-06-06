import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BScroll from '@common/BScroll/BScroll'

Vue.config.productionTip = false
Vue.component("BScroll",BScroll);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
