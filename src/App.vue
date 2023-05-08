<script>
export default {
  created() {
    this.$store.dispatch("loadCache");
    if (
      Array.isArray(this.$store.state.searchResult) &&
      this.$store.state.searchResult.length
    )
      return;
    this.$store.dispatch("getRandomPhotos");
  },
  data() {
    return {};
  },
};
</script>
<template>

<div class="navigation d-flex justify-content-center align-items-center">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="back">
        <router-link to="/">
          <img src="../public/logo.png" class="logo" alt="logo" />
        </router-link>
      </div>
      <div class="pages d-flex align-items-center font-20">
        <router-link :to="{ name: 'home' }" class="text">
          <img src="../public/search.png" class="icon mx-2" alt="search"  />
          <span>Поиск</span>
        </router-link>
        <router-link :to="{ name: 'FavoritesPage' }" class="text mx-5">
          <img src="../public/favorites.png" class="icon mx-2" alt="favorites" />
          <span>Избранное</span>
        </router-link>
      </div>
    </div>
  </div>
  <router-view />

</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
@import "bootstrap/scss/bootstrap.scss";
</style>
<style>

.logo {
  width: 185px;
  height: 72px;
  margin-left: 130px; 
}
.icon {
  width: 25px;
  height: 25px;
}
.navigation {
  height: 90px;
  background-color: black;
}
.text {
  color: white;
  font-family: Roboto;
}
a {
  text-decoration: none;
}
a:hover {
  color: yellow;
}
.font-20 {
  font-size: 20px;
}
.font-14 {
  font-size: 14px;
}
.font-18 {
  font-size: 18px;
}
.font-30 {
  font-size: 30px;
}
</style>
