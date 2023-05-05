<script>
import GridImage from "../components/GridImages";

export default {
  data() {
    return {
      search: "",
      photo: null,
    };
  },
  components: {
    GridImage,
  },
  methods: {
    searchPhotos() {
      this.$store.dispatch("getRandomPhotos", this.search);
      console.log(this.search);
    },
    getRandomPhoto() {
      const randomIndex = Math.floor(
        Math.random() * this.$store.state.searchResult.length
      );
      this.photo = this.$store.state.searchResult[randomIndex];
    },
  },
  created() {
    this.getRandomPhoto();
  },
};
</script>
<template>
  <div>
    <div
      class="random-photo d-flex align-items-center align-self-center justify-content-center"
      v-if="photo"
      :style="{ 'background-image': `url(${photo.urls.regular})` }"
    >
      <div class="search-bar">
        <input
          type="text"
          class="input-search"
          placeholder="Поиск"
          v-model="search"
        />
        <button class="search-btn" @click="searchPhotos">
          <img src="../../public/searchInvert.png" />
        </button>
      </div>
    </div>
  </div>
  <GridImage :photos="$store.state.searchResult" />
</template>
<style>
.random-photo:before {
  content: "";
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.95;
}
.random-photo {
  background-size: cover;
  background-position: center;
}

.search-bar {
  position: absolute;
  width: 860px;
  height: 70px;
  background-color: rgb(255, 255, 255);
}
.random-photo {
  height: 270px;
  background-color: aquamarine;
}
.input-search {
  width: 770px;
  height: 70px;
  border: 0;
  outline: none;
  margin-left: 20px;
}
.search-btn {
  outline: none;
  border: 0;
  background-color: transparent;
}
</style>
