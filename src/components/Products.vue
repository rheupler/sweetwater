<template>
  <div class="hello">
    <div class="row">
      <div class="card col-md-3 item" v-for="item in items">
        <img v-bind:src="item.image">
        <p>{{ item.description }}</p>
        <p>${{ item.price }}</p>
        <p>Item ID: {{ item.itemid }}</p>
        <button type="button" name="button" @click='addToCart(item)' class="btn btn-success">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Products',
  data () {
    return {
      items: this.$store.state.items,
      cart: []
    }
  },
  methods: {
		addToCart(item) {
			this.$store.commit('addToCart', item)
			const info = item + ' added to cart'
			this.cart.push(info)
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
.item {
  padding: 2rem 1rem;
}
</style>
