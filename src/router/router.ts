import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/about',
    name: 'О компании',
    component: () => import('@/views/about-view.vue'),
    meta: { inNavbar: true },
  },
  {
    path: '/services',
    name: 'Услуги',
    component: () => import('@/views/services-view.vue'),
    meta: { inNavbar: true },
  },
  {
    path: '/projects',
    name: 'Проекты',
    component: () => import('@/views/projects-view.vue'),
    meta: { inNavbar: true },
  },
]

export const navbarRoutes = routes.filter((route) => route.meta?.inNavbar)

const router = createRouter({
  history: createWebHistory('/neuromionics-landing/'),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0)
    return { el: '.hero-section', top: 0 }
  },
})

export default router
