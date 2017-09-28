import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello';
import Home from '@/components/Home'
import Type from '@/components/Type'
import Find from '@/components/Find'
import Shopping from '@/components/Shopping'
import Mine from '@/components/Mine'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/Home"
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Type',
      name: 'Type',
      component: Type
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },

  ],
})
