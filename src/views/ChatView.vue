<template>
  <div class="chatContainer">
    <div class="header">
      <router-link to="/rooms/public">
        <img src="@/assets/left-arrow.png"
      /></router-link>
      <h3>{{ chatName }}</h3>
    </div>

    <div class="messagesContainer">
      <ChatMessage
        v-for="(chatMessage, idx) in chatMessages"
        :key="idx"
        v-bind="chatMessage"
      />
    </div>
    <div class="inputContainer">
      <input type="text" placeholder="Type your message..." v-model="message" />
      <div @click="sendMessage" class="sendButton">
        <img src="@/assets/paper-plane.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

// components
import ChatMessage from '@/components/ChatMessage.vue';

export default {
  components: { ChatMessage },
  computed: {
    chatMessages() {
      return this.$store.state.chatModule.chatMessages;
    },
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const chatName = store.state.chatRooms.currentChatName;

    // chat
    const message = ref('');

    onBeforeUnmount(() => {
      localStorage.removeItem('currentChatName');
      store.dispatch('chatRooms/changeCurrentChatName', 'default name');
      store.dispatch('chatModule/clearChat');
      store.state.socketInstance.socketConnected &&
        store.state.socketInstance.socket.send(
          JSON.stringify({
            event: 'leaveRoom',
            data: route.params.id,
          })
        );
      console.log('room leaved');
    });

    const sendMessage = () => {
      store.state.socketInstance.socketConnected &&
        store.state.socketInstance.socket.send(
          JSON.stringify({
            event: 'roomMessage',
            data: {
              room: route.params.id,
              message: message.value,
            },
          })
        );
      message.value = '';
    };

    watchEffect(() => {
      store.state.socketInstance.socketConnected &&
        store.state.socketInstance.socket.send(
          JSON.stringify({
            event: 'joinRoom',
            data: route.params.id,
          })
        );
    });

    return {
      chatName,
      message,
      sendMessage,
    };
  },
};
</script>

<style scoped>
.chatContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 99vh;
}

.header {
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  justify-content: center;
  background-color: white;
}

.header img {
  width: 20px;
  height: 20px;
  margin-right: 7rem;
  position: absolute;
  left: 10px;
  top: 1.3rem;
}

.messagesContainer {
  height: 100%;
  background-color: #f5f7fb;
  padding: 1rem;
}

.inputContainer {
  height: 5rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.inputContainer input {
  padding: 10px 30px;
  margin-right: 10px;
  font-size: 1rem;
  border-radius: 30px;
  border: none;
  background-color: #efefef;
}

.sendButton {
  width: 40px;
  height: 40px;
  padding: 2px;
  border-radius: 50%;
  background-color: #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sendButton img {
  width: 25px;
  height: 25px;
}
</style>
