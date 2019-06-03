import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,//可以设置基础地址
  routes: []
})
