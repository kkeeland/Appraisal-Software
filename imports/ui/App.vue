<template>
    <!-- Wrapper-->
    <div id="wrapper">
  
      <navigation></navigation>
      <!-- Page wraper -->
      <div id="page-wrapper" class="gray-bg">
      
        <topnavbar></topnavbar>
  
       <router-view></router-view>

      </div>
      <!-- End page wrapper-->
    </div>
    <!-- End of Wrapper -->
</template>

<script>

  //sessions from meteor sessions
  import {
    Session
  } from 'meteor/session';
  
  console.log(Session);
  
  export default {
    data() {
      return {
        buttonLabel: 'Count +1',
        count: 0,
        size: 4,
        user: null,
      }
    },
    mounted() {
      Session.setDefault('counter', 0);
    },
    meteor: {
      data: {
        count() {
          return Session.get('counter');
        },
        user() {
          return Meteor.user()
        }
      }
    },
    methods: {
      addOne() {
        Session.set('counter', this.count + 1);
      }
    },
    components: {
      
    },
    metaInfo: {
      title: 'Claim Management System',
    },
  };
</script>









<style>
 
</style>
