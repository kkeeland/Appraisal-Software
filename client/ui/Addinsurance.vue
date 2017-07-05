<template>
  <form novalidate @submit.stop.prevent="submit">
    <md-card style="margin-top:50px;">
      <md-card-area>
        <md-card-content>
          
          <md-input-container class="col-md-4">
            <label>Initial value</label>
            <md-input v-model="initialValue"></md-input>
          </md-input-container>

        </md-card-content>
      </md-card-area>
  
      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
  
  </form>
</template>

<script>
  import mdInputContainer from 'vue-material'
  import mdCard from 'vue-material'
  
  export default {
    data() {
      return {
        initialValue: ''
      }
    },
    components: {
      name: mdInputContainer,
      name: mdCard
    }
  };
</script>

