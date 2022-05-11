<template>
  <div>
    <router-link v-slot="{ isActive }" to="/rooms/public"
      ><a :class="[isActive && 'isActive']">Public rooms</a></router-link
    >
    <router-link v-slot="{ isActive }" to="/rooms/direct"
      ><a :class="[isActive && 'isActive']">Direct chats</a></router-link
    >
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  padding: 10px 20px;
}

.isActive {
  color: white;
  border-radius: 30px;
  background: #3ba58a;
}
</style>
