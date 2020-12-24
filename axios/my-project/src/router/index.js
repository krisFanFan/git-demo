import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import lessdemo from '@/components/lessdemo'
import chart from '@/components/chart'
import chart1 from '@/components/chart1'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chart1',
      component: chart1
    },{
      path: '/lessdemo',
      name: 'lessdemo',
      component: lessdemo
    },{
      path: '/chart',
      name: 'chart',
      component: chart
    }

  ]
})
