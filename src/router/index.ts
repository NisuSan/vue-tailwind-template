import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      layout: 'AppLayoutHome'
    }
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})