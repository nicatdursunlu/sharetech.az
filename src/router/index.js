import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage';
import NewsPage from '../views/NewsPage';
import SearchPage from '../views/SearchPage';
import NotFoundPage from '../views/NotFoundPage';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/news/:title',
    name: 'NewsPage',
    component: NewsPage,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
  {
    path: '/404',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
  {
    path: '/news/-*',
    redirect: { name: 'NotFoundPage' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
