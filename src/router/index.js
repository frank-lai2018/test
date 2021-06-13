import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import KkdayProduct from '@/components/KkdayProduct'
import DatePicker from '@/components/DatePicker'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/DatePicker',
      name: 'DatePicker',
      component: DatePicker
    },
    {
      path: '/KkdayProd',
      name: 'KkdayProduct',
      component: KkdayProduct
    }
  ]
})
