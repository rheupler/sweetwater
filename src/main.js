// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import Products from './components/Products.vue'
import Cart from './components/Cart.vue'

Vue.config.productionTip = false

Vue.component('Products', Products)
Vue.component('Cart', Cart)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
