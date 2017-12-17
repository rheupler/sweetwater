<template>
  <div class="hello">
    <div class="row">
      <div class="card col-md-12">
        <div class="row">

        <div v-for="item in cart" class="col-md-6">
          <p>Quantity: <b>{{item.count}}</b> || Price: ${{ item.price }}</p>
          <p>{{ item.description }}</p>
          <button type="button" name="button" @click='removeFromCart(item)' class="btn btn-success">Remove from cart</button>
        </div>
      </div>
      </div>
    </div>
    <div v-if="cart.length === 0">
			<h2> Cart empty </h2>
		</div>
		<div v-else>
			<div><h1>Total: ${{ formatCurrency(total) }}</h1></div>
		</div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'Cart',
  computed: {
	   ...mapGetters(['total'])
	},
  methods: {
    formatCurrency(price) {
			return price.toFixed(2)
		},
    ...mapMutations([
			'removeFromCart'
		])
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
