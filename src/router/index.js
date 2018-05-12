import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import SearchGPA from '../components/SearchGPA'
import Alter from '../components/Alter'
Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SearchGPA',
      name: 'SearchGPA',
      component: SearchGPA
    },
    {
      path:'/Alter',
      name:'Alter',
      component:Alter
    }
  ]
})
