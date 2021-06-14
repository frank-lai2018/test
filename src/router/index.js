import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import KkdayProduct from '@/components/KkdayProduct'
import DatePicker from '@/components/DatePicker'
import Product from '@/components/Product'
import Product1 from '@/components/Product1'


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
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Product1',
      name: 'Product1',
      component: Product1
    },
    {
      path: '/KkdayProd',
      name: 'KkdayProduct',
      component: KkdayProduct
    }
  ]
})
