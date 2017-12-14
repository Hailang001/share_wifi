import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Skip from '../components/Skip.vue'
import Radar from '../components/Radar.vue'
import Chat from '../components/Chat.vue'
import Humanlist from '../components/Humanlist.vue'
import Oneman from '../components/Oneman.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Skip',
      name: 'Skip',
      component: Skip
    },
    {
      path: '/Radar',
      name: 'Radar',
      component: Radar
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/Humanlist',
      name: 'Humanlist',
      component: Humanlist
    },
    {
      path: '/Oneman',
      name: 'Oneman',
      component: Oneman
    }
  ]
})
