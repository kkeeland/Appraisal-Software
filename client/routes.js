/* /client/routes.js */

// Import the router
import { RouterFactory } from 'meteor/akryum:vue-router2'

// Components
import App from '/imports/ui/App.vue'
import Claim from '/imports/ui/Claim.vue'
import Dashboard from '/client/ui/Dashboard.vue'
import Test from '/imports/ui/Test.vue'
import emailCompose from '/client/ui/emailCompose.vue'
import Billingdashboard from '/client/ui/Billingdashboard.vue'
import Addinsurance from '/client/ui/Addinsurance.vue'



RouterFactory.configure(factory => {
  // Simple routes
  factory.addRoutes([
    {
      path: '/dashboard',
      name: 'dashboard',
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
    },
    {
        path:'/emailcompose', 
        name:'emailcompose',
        component: emailCompose,
    }, 
     {
        path:'/billingdashboard', 
        name:'billingdashboard',
        component: Billingdashboard,
    }, 
    {
        path:'/addinsurance', 
        name:'addinsurance',
        component: Addinsurance,
    }
        

  ])
})