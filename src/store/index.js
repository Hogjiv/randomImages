import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    selectedPhotoId: '',
    favorites: [],
    searchString: "",
    searchResult: []
  },
  mutations: {
    setSelectedPhoto(state, photo) {
      state.selectedPhotoId = photo
    },
    favorites(state, next) {
      state.favorites = next;
    },
    searchResult(state, results) {
      state.searchResult = results;
    },
    searchString(state, xx){
      state.searchString = xx;
    }
  },
  actions: {
    async getRandomPhotos({ commit, dispatch }, searchString='') {
      const accessKey = "GxnvEMTeifytYyINHxSi3b8yeKPHK12DQigqJGepsFQ";
      const result = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          params: {
            count: 9,
            client_id: accessKey,
          },
        }
      );
      const photos = result.data.map((photo) => {
        return {
          id: photo.id,
          description: photo.description,
          urls: photo.urls,
          user: photo.user,
          tags: photo.tags,
        };
      });
      commit("searchResult", photos);
      commit("searchString", searchString);
      dispatch('saveCache')
    },
    loadCache({commit}) {
      const cache =  localStorage.getItem('allState') || null 
      if (!cache) return
      const data = JSON.parse(cache) || null
      if (!data) return
      if (data.searchString ) commit('searchString', data.searchString)
      if (data.favorites ) commit('favorites', data.favorites)
      if (data.selectedPhotoId ) commit('selectedPhotoId', data.selectedPhotoId)
      if (data.searchResult ) commit('searchResult', data.searchResult)
    },
    saveCache({state}) {
      localStorage.setItem('allState', JSON.stringify(state))
    }
  },
});

export default store;
