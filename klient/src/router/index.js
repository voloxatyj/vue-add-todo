import Vue from 'vue';
import VueRouter from 'vue-router';
import Projects from '../views/Projects';
import LogIn from '../views/LogIn.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/projects',
    name: 'project',
    component: Projects
  }, 
  {
    path: '/login',
    name: 'login',
    component:LogIn
  }, 
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
