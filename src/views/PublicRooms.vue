<template>
  <div class="publicRoomsContainer">
    <router-link to="/chat/uuid-random-123"
      ><PublicRoomPreview
        v-for="(room, idx) in mockPublicRooms"
        :key="idx"
        v-bind="room"
    /></router-link>
  </div>
</template>

<script>
const mockPublicRooms = [
  {
    roomName: 'Comics',
    people: 590,
  },
  {
    roomName: 'Juegos',
    people: 300,
  },
  {
    roomName: 'Amistad',
    people: 108,
  },
  {
    roomName: 'Libros',
    people: 50,
  },
];

import PublicRoomPreview from '@/components/PublicRoomPreview.vue';
export default {
  name: 'PublicRooms',
  components: { PublicRoomPreview },
  data() {
    return {
      mockPublicRooms,
    };
  },
};
</script>

<style scoped>
.publicRoomsContainer {
  background-color: white;
  width: 100%;
  max-width: 600px;
  min-height: 80vh;
  border-radius: 30px;
  padding: 10px;
}

* {
  text-decoration: none;
  color: inherit;
}
</style>
