import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../components/pages/home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: ()=> import('../components/pages/about.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import('../components/pages/contact.vue'),
  },
  {
    path:'/:pathMatch(.*)*',
    component: ()=> import("../components/NotFound.vue")
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top:0 }
  }
})

export default router