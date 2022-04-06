<template class="bg-gray-200">
  <Header />
  <input
    type="text"
    placeholder="Search..."
    class="input block mx-auto mb-8 bg-gray-50 mt-8 border-2 rounded-md px-2 py-1"
    v-model="searchValue"
    @keypress.enter="fetchApi(searchValue)"
  />

  <div class="divide-y divide-gray-100">
    <Nav>
      <NavItem href="/new" isActive>Search Food</NavItem>
      <NavItem href="/top">Top Rated</NavItem>
      <NavItem href="/picks">Vincent Picks</NavItem>
    </Nav>
    <List>
      <Product
        :title="item.recipe.label"
        :image="item.recipe.image"
        :calories="item.recipe.calories.toFixed(2)"
        :description="item.recipe.mealType.toString()"
        v-for="(item, index) in content"
        :key="index"
      />
    </List>
    <div class="grid grid-cols-5 w-grid"></div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Product from './components/Product.vue'
import Nav from './components/Nav.vue'
import NavItem from './components/NavItem.vue'
import List from './components/List.vue'

export default {
  components: { Header, Product, Nav, NavItem, List },
  data () {
    return {
      content: null,
      searchValue: null
    }
  },
  methods: {
    async fetchApi (value) {
      const response = await fetch(
        `https://api.edamam.com/search?q=${value}&app_id=179cb104&app_key=919ca3b0bb79b02ab1c54f3c3418c42e`
      )
      try {
        this.content = await response.json()
        this.content = this.content.hits
        console.log(this.content)
      } catch (error) {
        console.error('Fetching error', error)
      }
    }
  }
}
</script>

<style lang="sass">
.input
  width: 400px
.w-grid
  width: 1200px
  margin: 0 auto
</style>
