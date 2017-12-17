<template>
  <div class="hello">
    <div class="row">
      <div class="card col-md-3" v-for="item in items[0]">
        <p>{{ item.description }}</p>
        <p>Item ID: {{ item.itemid }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: []
    }
  },
  created () {
    fetch('../src/items.json')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.items.push(response)
      })
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
