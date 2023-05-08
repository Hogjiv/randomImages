<script>
export default {
  data() {
    return {
      newFavorite: null,
      favoritesState: false
    }
  },
  created() {
    const favorites = this.$store.state.favorites;
    console.log(favorites);
    this.favoritesState = favorites.length 
},
}
</script>

<template>
  <h1>Favorites</h1>
  <h1 v-if="favoritesState"> Тут есть что-то </h1>
  <p v-else>Тут ничего нет</p>
</template>
<style>
 
</style>