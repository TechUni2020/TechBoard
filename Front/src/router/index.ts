import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import DashBoard from '../views/dashboard/Index.vue'
import Board from '../views/board/_id.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'empty' },
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
  },
  {
    path: '/boards/:id?',
    name: 'Board',
    component: Board,
    meta: { layout: 'empty' },
  },
  // {
  //   path: "/:catchAll(.*)",
  //   component: NotFound,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
