import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes =[
  {
    path: '/:planetName',
    name: 'MainView',
    component: MainView,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
