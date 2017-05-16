<template>
<div class="test">
    <div class="message" v-for="msg in messages">
      <span class="content">{{ msg.message }}</span>
      <button @click="removeMessage(msg._id)">x</button>
    </div>
  <input v-model="message" />
</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';

export default {
  data: () => ({
    message: '',
    newMessage: ''
  }),
  meteor: {
    messages() {
      return Messages.find({}, {
        sort: { date: -1 },
      });
    },
    subscribe: {
      'messages': [],
    }
  }
}








</script>
