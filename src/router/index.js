import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import NewEmployee from '@/components/NewEmployee'
import ViewEmployee from '@/components/ViewEmployee'
import EditEmployee from '@/components/EditEmployee'

Vue.use(Router);

// noinspection JSAnnotator
export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/new',
      name: 'new-Employee',
      component: NewEmployee
    },
    {
      path: '/:employee_id',
      name: 'view-Employee',
      component: ViewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-Employee',
      component: EditEmployee
    }
  ]
})
