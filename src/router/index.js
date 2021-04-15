import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage';
import NewsPage from '../views/NewsPage';
import SearchPage from '../views/SearchPage';

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
  // {
  //   path: '/search/',
  //   name: 'SearchPage',
  //   component: SearchPage,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
