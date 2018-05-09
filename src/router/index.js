import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout'
/* VIEWS */
import AddProperty from '../components/views/add-property/Layout'
import Search from '../components/views/search/Layout'
import BankView from '../components/views/bank/Layout'
import PropertyView from '../components/views/property/Layout'
import TradeView from '../components/views/trade/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: 'inmobiliaria',
      component: Layout,
      children: [
        {
          path: '/inmobiliaria',
          name: 'inmobiliaria',
          component: AddProperty
        },
        {
          path: '/busqueda',
          name: 'busqueda',
          component: Search
        },
        {
          path: '/banco',
          name: 'banco',
          component: BankView
        },
        {
          path: '/propiedades/:id',
          name: 'propiedades',
          component: PropertyView
        },
        {
          path: '/transacciones',
          component: TradeView
        }
      ]
    }
  ]
})
