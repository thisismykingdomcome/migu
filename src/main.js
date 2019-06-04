import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import BScroll from '@common/BScroll/BScroll'

Vue.prototype.$axios = axios;
// axios.defaults.baseURL ="/api";//方法二：这里不写，下面的响应头设置就无效.
// axios.defaults.headers.post['Content-Type'] = 'application/json';//方法二

Vue.config.productionTip = false
Vue.component("BScroll",BScroll);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
