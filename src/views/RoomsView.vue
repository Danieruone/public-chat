<template>
  <h1>Rooms View</h1>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'RoomsView',
  components: { NavBar },
};
</script>

<style scoped></style>
