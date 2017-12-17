<template>
  <div class="hello">
    <div class="row">
      <div class="card col-md-12">
        <h1>I am a cart</h1>
        <div v-for="item in cart">
          <p><b>${{ item.price }}</b></p>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div v-if="cart.length === 0">
			<h2> No item :( </h2>
		</div>
		<div v-else>
			<div>Total: ${{ formatCurrency(total) }}</div>
		</div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
  name: 'Cart',
  computed: {
		...mapGetters(['total'])
	},
  methods: {
    formatCurrency(price) {
			return price.toFixed(2)
		},
  },
  data () {
    return {
      cart: this.$store.state.cart
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
