<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
  store.state.socketInstance.socket.onopen = () => {
    console.log('WebSocket Client Connected');
    store.dispatch('socketInstance/setSocketConnection', true);
  };

  store.state.socketInstance.socket.onclose = () => {
    console.log('Socket is closed. Trying to reconnect');
    store.dispatch('socketInstance/setSocketConnection', false);
    store.dispatch(
      'socketInstance/reconnectSocket',
      new WebSocket(process.env.VUE_APP_SOCKET_CONNECTION)
    );
  };

  store.state.socketInstance.socket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    console.log(data);
    if (data.event === 'rooms') {
      const rooms = data.data.map((room) => JSON.parse(room));
      store.dispatch('chatRooms/changePublicChatRooms', rooms);
    }
  };
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f7fb;
  height: 100vh;
}

html,
body {
  margin: 0;
}
</style>
