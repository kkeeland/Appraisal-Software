// Libs
import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import { Accounts } from 'meteor/accounts-base'
import VueInputmask from 'vue-inputmask';
import summernote from 'summernote';
import datepicker from 'bootstrap-datepicker';
import multiselect from 'bootstrap-multiselect';
import sortable from 'jquery-ui-sortable-npm';
import swal from 'sweetalert2';

Vue.use(VueInputmask);


Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
})

import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);

import VueMeta from 'vue-meta';
Vue.use(VueMeta)

// Main app
import App from '/imports/ui/App.vue';

// Import the router factory
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'

// Create router instance
const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
})



Meteor.startup(() => {

  

  $(document).ready(function () {
    $(".datepicker").datepicker({
    });
  });

  $(document).ready(function () {
    $('#example-getting-started').multiselect({
      buttonWidth: '200px'
    });
  });
  // Minimalize menu when screen is less than 768px
  $(window).bind("resize load", function () {
    if ($(this).width() < 769) {
      $('body').addClass('body-small')
    } else {
      $('body').removeClass('body-small')
    }
  });

  // Fix height of layout when resize, scroll and load
  $(window).bind("load resize scroll", function () {
    if (!$("body").hasClass('body-small')) {

      var navbarHeigh = $('nav.navbar-default').height();
      var wrapperHeigh = $('#page-wrapper').height();

      if (navbarHeigh > wrapperHeigh) {
        $('#page-wrapper').css("min-height", navbarHeigh + "px");
      }

      if (navbarHeigh < wrapperHeigh) {
        $('#page-wrapper').css("min-height", $(window).height() + "px");
      }

      if ($('body').hasClass('fixed-nav')) {
        if (navbarHeigh > wrapperHeigh) {
          $('#page-wrapper').css("min-height", navbarHeigh + "px");
        } else {
          $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
        }
      }
    }
  });

  $('body').addClass('skin-1');

  // SKIN OPTIONS
  // Uncomment this if you want to have different skin option:
  // Available skin: (skin-1 or skin-3, skin-2 deprecated, md-skin)


  // FIXED-SIDEBAR
  // Uncomment this if you want to have fixed left navigation
  // $('body').addClass('fixed-sidebar');
  // $('.sidebar-collapse').slimScroll({
  //     height: '100%',
  //     railOpacity: 0.9
  // });

  // BOXED LAYOUT
  // Uncomment this if you want to have boxed layout
  //$('body').addClass('boxed-layout');
  // Toggle left navigation


  const router = routerFactory.create()

  new Vue({
    router,
    render: h => h(App),
  }).$mount('app');
});
