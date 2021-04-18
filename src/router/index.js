import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage';
import NewsPage from '../views/NewsPage';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/news/',
    name: 'NewsPage',
    component: NewsPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
