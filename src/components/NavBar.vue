<template>
  <div class="container">
    <router-link
      style="text-decoration: none; color: inherit"
      to="/rooms/public"
      >Public Rooms</router-link
    >
    <router-link
      style="text-decoration: none; color: inherit"
      to="/rooms/direct"
      >Direct Messages</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
