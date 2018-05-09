import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout'
/* VIEWS */
import AddProperty from '../components/views/add-property/Layout'
import Search from '../components/views/search/Layout'

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
          component: AddProperty
        }
      ]
    }
  ]
})
