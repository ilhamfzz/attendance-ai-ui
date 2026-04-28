import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import MainLayout from '../layouts/MainLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import LiveCam from '../views/LiveCam.vue'
import Employee from '../views/Employee.vue'
import AddEmployee from '../views/AddEmployee.vue'
import History from '../views/History.vue'
import MyHistory from '../views/MyHistory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'live-cam',
          name: 'live-cam',
          component: LiveCam,
        },
        {
          path: 'employee',
          name: 'employee',
          component: Employee,
        },
        {
          path: 'employee/add',
          name: 'add-employee',
          component: AddEmployee,
        },
        {
          path: 'history',
          name: 'history',
          component: History,
        },
        {
          path: 'my-history',
          name: 'my-history',
          component: MyHistory,
        }
      ]
    }
  ],
})

export default router
