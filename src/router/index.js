import Vue from 'vue'
import Router from 'vue-router'
import TicTac from '@/components/TicTac'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TicTac',
      component: TicTac
    }
  ]
})
