import Vue from 'vue'
import Vuex from 'vuex'
import items from '../items'

Vue.use(Vuex)

const state = {
  items,
  cart: []
}

const mutations = {
  addToCart({ cart }, item) {
				cart.push({ ...item, count: 1 })
		},
}

const getters = {
  total: state => {
		let amount = 0
		state.cart.forEach(item => (amount += item.price * item.count))
		return amount
	}
}

const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
