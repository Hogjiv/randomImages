<script>
import store from "../store";
export default {
  data() {
    return {
      selected: [],
    };
  },
  props: ["photos"],
  methods: {
    // getRandomTag() {
    //   const tags = ["nature", "city", "food", "music", "sports", "animals"];
    //   return tags[Math.floor(Math.random() * tags.length)];
    // },
    ImageClicked(photo) {
      this.selected.push(photo);
      store.dispatch("setSelectedPhoto", photo);
    },
  },
};
</script>

<template>
  <div class="container d-flex">
    <div class="row">
      <div
        class="col-4 mt-4 position"
        v-for="(photo, index) in photos"
        :key="index"
      >
        <div class="picture">
          <router-link :to="'/image/' + photo.id">
            <img v-if="photo" :src="photo.urls.regular" class="picture-item" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.position {
  display: flex;
  justify-content: center;
}
.picture {
  width: 300px;
  height: 300px;
  margin: 0px;
  padding: 0px;
}
.picture-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0px;
  padding: 0px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  margin: 20px;
}
</style>
