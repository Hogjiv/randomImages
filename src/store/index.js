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
    addToFavorites(state, next) {
      if (state.favorites.includes(next)) {
        alert('This picture is already in favorites')
      } else {
        state.favorites.push(next)
      }
      // localStorage.setItem('allState', JSON.stringify(state))
    },
    removeFromFavorites(state, photo) {
      state.favorites = state.favorites.filter(x => x.id !== photo.id )
    },
    searchResult(state, results) {
      state.searchResult = results;
    },
    favorites(state, results) {
      state.favorites = results;
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
    },
    toggleFavorites(store, photo) {
      if (!store.state.favorites.some(x => x.id === photo.id )) {
       store.commit('addToFavorites', photo)
       console.log('ADD', photo)
      } else {
        store.commit('removeFromFavorites', photo)
        console.log('remove', photo)
      }
      store.dispatch('saveCache')
    }
  },
});

export default store;
