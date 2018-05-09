import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout'
import AddProperty from '../components/views/add-property/Layout'

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
        }
      ]
    }
  ]
})
