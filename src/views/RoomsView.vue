<template>
  <div class="roomsContainer">
    <div class="logoContainer">
      <img src="@/assets/chat-icon.png" />
      <h2>Public Chat</h2>
    </div>
    <NavBar />
  </div>
  <div class="componentsArea">
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'RoomsView',
  components: { NavBar },
};
</script>

<style scoped>
.roomsContainer {
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

.componentsArea {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
