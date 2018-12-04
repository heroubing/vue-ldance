import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage/Homepage'
import Courses from '@/components/Courses/Courses'
import BrandInfo from '@/components/BrandInfo/BrandInfo'
import Contact from '@/components/Contact/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Homepage'
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/BrandInfo',
      name: 'BrandInfo',
      component: BrandInfo
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
