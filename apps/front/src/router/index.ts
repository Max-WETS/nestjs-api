import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Success from '../components/Success.vue';
import Failure from '../components/Failure.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/success',
    name: 'Success',
    component: Success,
  },
  {
    path: '/failure',
    name: 'Failure',
    component: Failure,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
