<template>
  <div class="chat">
    <h2>Chat</h2>

    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Enter new message" />


    <div v-if="!$subReady.messages">
      Loading...
    </div>

    <div class="message" v-for="msg in messages">
      <span class="content">{{ msg.message }}</span>
      <button @click="removeMessage(msg._id)">x</button>


    </div>
  </div>
</template>

<script>


export default {
  name: 'chat',
  data () {
    return {
      newMessage: '',
      messages: [],
    }
  },
  meteor: {
    messages() {
      return Messages.find({}, {
        sort: { date: -1 },
      });
    },
    subscribe: {
      'messages': [],
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage !== ""){
        Meteor.call('addMessage', this.newMessage);
        this.newMessage = '';
      }
      
    },
    removeMessage(_id) {
      Meteor.call('removeMessage', _id);
    },
  },
};
</script>












