<template>
  <h1>{{ chatName }}</h1>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const chatName = store.state.chatModule.currentChatName;

onMounted(() => {
  store.state.socketInstance.socketConnected &&
    store.state.socketInstance.socket.send(
      JSON.stringify({
        event: 'join',
        data: route.params.id,
      })
    );
});
onBeforeUnmount(() => {
  localStorage.removeItem('currentChatName');
  store.dispatch('chatModule/changeCurrentChatName', 'default name');
  store.state.socketInstance.socketConnected &&
    store.state.socketInstance.socket.send(
      JSON.stringify({
        event: 'leave',
        data: route.params.id,
      })
    );
});
</script>

<style scoped></style>
