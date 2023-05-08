<script>
export default {
  data() {
    return {
      photo: null,
    };
  },
  created() {
    this.photo = this.$store.state.searchResult.find(
      (element) => element.id === this.$route.params.photoId
    );
  },
  methods: {
    addToFavorites() {
      //  this.$store.commit('addToFavorites', this.photo)
       this.$store.dispatch('toggleFavorites', this.photo)
    }
  },
  computed: {
    inFavorites() {
      return this.$store.state.favorites.some(x => x.id === this.photo?.id)
    }
  }
};
</script>

<template>
  <div v-if="photo" class="ph d-flex justify-content-end">
    <div class="main-container">
      <div
        class="background"
        :style="{ 'background-image': `url(${photo.urls.regular})` }"
      >
        <div class="content">
          <div class="cc d-flex flex-row">
            <div class="user-info d-flex align-items-center text-white">
                <img src="../../public/favicon.svg" alt="photo" class="userpic mx-3" />
                <div class="d-flex flex-column"> 
                <span class="font-30">NAME</span>
                <span class="font-18">@name</span>
              </div>
            </div>
            <div class="buttons d-flex">
              <button class="favorites"
              @click="addToFavorites">
                
                <img src="../../public/like.png"/>
                <span v-if="inFavorites" class="font-14"> Remove </span>
                <span v-else class="font-14"> add </span>
              </button>
              <button class="download mx-4 d-flex align-items-center">
                <img
                  src="../../public/download.png"
                  class="mr-2"
                  style="margin-left: 10px"
                />
                <span class="mx-auto">Download</span>
              </button>
            </div>
          </div>
          <div class="single-picture-container d-flex justify-content-center">
            <img :src="photo.urls.regular" alt="photo" class="single-picture" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.userpic {
  width: 55px;
  height: 55px;
}
.cc {
  height: 140px;
  display: flex;
  align-items: center;
}
.single-picture {
  max-height: 700px;
}
.user-info { 
  width: 300px;
  height: 60px;
}
.content {
  position: absolute;
  width: 1400px;
  height: 800px;
  z-index: 33;
  top: 0;
}
.main-container {
  width: 100%;
  position: absolute;
  background-color: rgb(183, 73, 26);
  height: 700px;
}
.background:before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.95;
}
.background {
  background-color: rgb(55, 133, 37);
  width: 100%;
  height: 700px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttons {
  position: absolute;
  z-index: 2;
  right: 0;
}
.ph {
  width: 100%;
  height: 700px;
}
.user {
  background-color: aqua;
}
.favorites {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  outline: none;
  border: 0;
}
.download {
  background-color: #fff200;
  width: 200px;
  height: 50px;
  border-radius: 8px;
  outline: none;
  border: 0;
}
.po {
  position: absolute;
  background-color: chartreuse;
}
.single-picture-container {
  z-index: 1;
}
</style>
