<template>
  <router-view />
</template>

<script setup>
import { onMounted, watchEffect } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
  // connected
  store.state.socketInstance.socket.onopen = () => {
    console.log('WebSocket Client Connected');
    store.dispatch('socketInstance/setSocketConnection', true);
  };

  // reconnect
  store.state.socketInstance.socket.onclose = () => {
    console.log('Socket is closed. Trying to reconnect');
    store.dispatch('socketInstance/setSocketConnection', false);
    store.dispatch(
      'socketInstance/reconnectSocket',
      new WebSocket(process.env.VUE_APP_SOCKET_CONNECTION)
    );
  };

  // messages listener
  store.state.socketInstance.socket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    console.log(data);
    if (data.event === 'rooms') {
      store.dispatch('chatRooms/changePublicChatRooms', data.data);
    }
    if (data.event === 'roomMessage') {
      store.dispatch('chatModule/addMessage', data.data);
    }
    if (data.event === 'profile') {
      store.dispatch('profileModule/setProfile', data.data);
    }
  };
});

// profile
watchEffect(() => {
  const profile = localStorage.getItem('profile');
  if (profile && store.state.socketInstance.socketConnected) {
    store.state.socketInstance.socket.send(
      JSON.stringify({
        event: 'profile',
        data: { name: profile.name },
      })
    );
  }
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
