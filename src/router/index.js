import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../views/Home')
  },
  {
    path: '/home',
    component: () => import('../views/Home')
  },
  {
    path: '/city/:city',
    component: () => import('../views/city/City'),
    props: true
  },
]

const router = new Router({
  routes,
  mode: 'hash'
})

export default router