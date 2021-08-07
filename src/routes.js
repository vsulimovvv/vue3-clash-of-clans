import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

import HomePage from './pages/home';
import AboutPage from './pages/about';
import notfoundPage from './pages/notFound';

const routers = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: notfoundPage,
    },
  ],
});

export default routers;
