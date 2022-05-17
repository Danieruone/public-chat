<template>
  <div class="chatContainer">
    <h3>{{ chatName }}</h3>
    <div class="messagesContainer">
      <p>Message: {{ message }}</p>
    </div>
    <div class="inputContainer">
      <input type="text" placeholder="Type your message..." v-model="message" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const chatName = store.state.chatRooms.currentChatName;

    // chat
    const message = ref('');

    onMounted(() => {
      store.state.socketInstance.socketConnected &&
        store.state.socketInstance.socket.send(
          JSON.stringify({
            event: 'join',
            data: route.params.id,
          })
        );

      console.log('Joined to room ' + route.params.id);
    });

    onBeforeUnmount(() => {
      localStorage.removeItem('currentChatName');
      store.dispatch('chatRooms/changeCurrentChatName', 'default name');
      store.state.socketInstance.socketConnected &&
        store.state.socketInstance.socket.send(
          JSON.stringify({
            event: 'leave',
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
              msg: message.value,
            },
          })
        );
    };

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
  border: solid 1px red;
}

.messagesContainer {
  border: 1px solid green;
  height: 100%;
}

.inputContainer {
  height: 5rem;
  border: solid 1px purple;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inputContainer input {
  padding: 10px 30px;
  margin-right: 10px;
}
</style>
