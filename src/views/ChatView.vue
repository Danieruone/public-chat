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
  beforeUnmount() {
    this.$store.dispatch('changeCurrentChatName', 'default name');
  },
};
</script>

<style scoped></style>
