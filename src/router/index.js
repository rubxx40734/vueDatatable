import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'card',
        component: () => import('../components/Cards.vue')
      },
      {
        path: 'filtercard',
        component: () => import('../components/FilterCard.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/datatables',
    name: 'Datatables',
    component: () => import('../views/Datatable.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
