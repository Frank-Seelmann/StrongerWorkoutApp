import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Extracker from '../views/Extracker.vue';
import Learn from '../views/Learn.vue';
import Login from '../views/Login.vue';
import Post from '../views/Post.vue';
import Profile from '../views/Profile.vue';
import Socialfeed from '../views/Socialfeed.vue';

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
    component: Extracker
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/reportissue',
    name: 'ReportIssue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ReportIssue.vue')
  },
  {
    path: '/socialfeed',
    name: 'Socialfeed',
    component: Socialfeed
  },
  {
    path: '/summary',
    name: 'Summary',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Summary.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
