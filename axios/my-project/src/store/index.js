import Vue from 'vue'
//导入vueX

import Vuex from 'vuex'

Vue.use(Vuex)
//导入
import state from './state'
import mutations from './mutations'
import { actions, a } from './actions'
import getters from './getters'

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
// 导出存储对象 给main.js使用
export default store
