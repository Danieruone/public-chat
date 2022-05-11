<template>
  <div>
    <router-link v-slot="{ isActive }" to="/rooms/public"
      ><a :class="[isActive && 'isActive']">Public Rooms</a></router-link
    >
    <router-link v-slot="{ isActive }" to="/rooms/direct"
      ><a :class="[isActive && 'isActive']">Direct Messages</a></router-link
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
  padding: 5px;
  margin: 0 1rem;
}

.isActive {
  color: #3ba58a;
  border-bottom: 3px solid #3ba58a;
}
</style>
