import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BScroll from '@common/BScroll/BScroll'
<<<<<<< HEAD
import VueTouch from "vue-touch";//引入点击事件组件
Vue.use(VueTouch, {name: 'v-touch'})//使用点击事件组件
=======


>>>>>>> tshs
Vue.config.productionTip = false
Vue.component("BScroll",BScroll);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
