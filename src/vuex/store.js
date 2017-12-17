import Vue from 'vue'
import Vuex from 'vuex'
import items from '../items'

Vue.use(Vuex)

const state = {
  items,
  cart: []
}

const mutations = {
}

const getters = {
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
