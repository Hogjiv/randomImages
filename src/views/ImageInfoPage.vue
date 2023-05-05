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
    console.log(this.photo);
  },
};
</script>

<template>
    <div v-if="photo">
    <div class="po">
      <div
        class="background"
        :style="{ 'background-image': `url(${photo.urls.regular})` }"
      >
        <div class="single-picture-container">
          <img :src="photo.urls.regular" class="single-picture " alt="photo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.po {
  position: absolute;
}
.single-picture-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.single-picture {
  max-height: 700px;
  margin-top: 200px;
}

.background:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.95;
}
.background {
  background-color: aquamarine;
  position: fixed;
  width: 100%;
  height: 700px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>