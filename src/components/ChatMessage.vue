<template>
  <div
    class="messageContainer"
    :class="{ selfUserColor: selfUser }"
    @click="redirectToChat"
  >
    <div>
      <strong>{{ chatName }}</strong>
    </div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'ChatPreview',
  props: {
    name: String,
    message: String,
    id: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const selfUser = store.state.profileModule.id === props.id;
    const chatName = selfUser ? 'Me' : props.name;

    const redirectToChat = () => {
      if (!selfUser) {
        store.state.socketInstance.socketConnected &&
          store.state.socketInstance.socket.send(
            JSON.stringify({
              event: 'leaveRoom',
              data: props.room,
            })
          );
        store.dispatch('chatRooms/changeCurrentChatName', props.name);
        router.push(`/chat/${props.id}`);
      }
    };

    return { chatName, selfUser, redirectToChat };
  },
};
</script>

<style scoped>
.messageContainer {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.messageContainer div {
  margin-right: 5px;
}

.messageContainer p {
  background-color: #01cef9;
  border-radius: 20px;
  color: white;
  padding: 5px 10px;
  margin: 0;
}

.selfUserColor {
  justify-content: end;
  flex-direction: row-reverse;
}

.selfUserColor div {
  margin-right: 0px;
  margin-left: 5px;
}

.selfUserColor p {
  background-color: #44bfc7;
}
</style>
