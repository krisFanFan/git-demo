import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import lessdemo from '@/components/lessdemo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/lessdemo',
      name: 'lessdemo',
      component: lessdemo
    }

  ]
})
