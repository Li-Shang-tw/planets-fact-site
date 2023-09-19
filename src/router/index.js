import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes =[
  {
    path: '/:planetName',
    name: 'MainView',
    component: MainView,
    props:true
  },
  //預設路徑是地球
  {
    path: '/#', redirect: '/#/Earth' 
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
