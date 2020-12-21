// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import less from 'less'
import VueRouter from 'vue-router'
Vue.prototype.$axios = axios
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(less)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
