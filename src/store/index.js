import Vue from 'vue'
import login from './modules/login'
import getters from './getter'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login
  },
  getters
})

export default store
