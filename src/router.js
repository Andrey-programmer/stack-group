import Vue from 'vue'
import Router from 'vue-router'
import Users from './components/Users'
import Groups from './components/Groups'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/users'
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/groups',
      name: 'groups',
      component: Groups
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
