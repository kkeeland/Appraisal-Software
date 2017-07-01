/* /client/routes.js */

// Import the router
import { RouterFactory } from 'meteor/akryum:vue-router2'

// Components
import App from '/imports/ui/App.vue'
import Claim from '/imports/ui/Claim.vue'
import Dashboard from '/client/ui/Dashboard.vue'
import Test from '/imports/ui/Test.vue'


RouterFactory.configure(factory => {
  // Simple routes
  factory.addRoutes([
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    }, 
    {
      path: '/dashboard',
      name: 'direct-dash',
      component: Dashboard,
    }, 
    {
        path:'/claim',
        name:'claim',
        component: Claim,
    }, 
    {
        path:'/test',
        name:'test',
        component: Test,
    }
  ])
})