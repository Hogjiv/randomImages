import { createRouter, createWebHistory } from 'vue-router'
import FavoritesPage from '@/views/FavoritesPage.vue'
import ImageInfoPage from '@/views/ImageInfoPage.vue' 
import MainPage from "@/views/MainPage.vue";
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/favorites',
    name: 'FavoritesPage',
    component: FavoritesPage
  },
  {
    path: '/image/:photoId',
    name: 'ImageInfoPage',
    component: ImageInfoPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
