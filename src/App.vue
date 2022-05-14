<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.state.socketInstance.socket.onopen = () => {
      console.log('WebSocket Client Connected');
      this.$store.dispatch('socketInstance/setSocketConnection', true);
    };
    this.$store.state.socketInstance.socket.onclose = function (e) {
      console.log('Socket is closed. Trying to reconnect', e.reason);
      this.$store.dispatch('socketInstance/setSocketConnection', false);
      this.$store.dispatch(
        'socketInstance/reconnectSocket',
        new WebSocket(process.env.VUE_APP_SOCKET_CONNECTION)
      );
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  background-color: #f5f7fb;
  height: 100vh;
}

html,
body {
  margin: 0;
}
</style>
