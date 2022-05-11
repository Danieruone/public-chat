<template>
  <div class="container">
    <div class="logoContainer">
      <img src="@/assets/chat-icon.png" />
      <h2>Public Chat</h2>
    </div>
    <NavBar />
  </div>
  <router-view />
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'RoomsView',
  components: { NavBar },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.logoContainer {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.logoContainer img {
  width: 30px;
  margin-right: 0.5rem;
}
</style>
