import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Daily from '@/components/Daily'
import Day from '@/components/Day'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    } ,
    {
      path: '/search',
      name: Search,
      component: Search
    },
    {
      path: '/daily/:day',
      name: Daily,
      component: Daily,
      props: true
    }
  ]
})




