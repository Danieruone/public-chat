<template>
  <h1>{{ chatName }}</h1>
</template>

<script>
export default {
  name: 'ChatView',
  data() {
    return {
      chatName: this.$store.state.currentChatName,
    };
  },
  created() {
    this.$store.state.socketConnected &&
      this.$store.state.socket.send(
        JSON.stringify({
          event: 'join',
          data: this.$route.params.id,
        })
      );
  },

  beforeUnmount() {
    this.$store.dispatch('changeCurrentChatName', 'default name');
    this.$store.state.socketConnected &&
      this.$store.state.socket.send(
        JSON.stringify({
          event: 'leave',
          data: this.$route.params.id,
        })
      );
  },
};
</script>

<style scoped></style>
