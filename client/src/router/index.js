import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Extracker from '../views/Extracker.vue';
import Learn from '../views/Learn.vue';
import Post from '../views/CreatePost.vue';
import Profile from '../views/Profile.vue';
import Feed from '../views/Feed.vue';
import Session from '../services/session';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/extracker',
    name: 'Extracker',
    component: Extracker,
    meta: { requiresLogin: true }
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/createpost',
    name: 'CreatePost',
    component: Post,
    meta: { requiresLogin: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresLogin: true }
  },
  {
    path: '/reportissue',
    name: 'ReportIssue',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReportIssue.vue')
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed,
    meta: { requiresLogin: true }
  },
  {
    path: '/summary',
    name: 'Summary',
    component: () => import(/* webpackChunkName: "about" */ '../views/Summary.vue'),
    meta: { requiresLogin: true }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Users.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "admin" */ '../views/SignUp.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !Session.user) {
    next('/login');
  }
  else {
    next();
  }
})

export default router
