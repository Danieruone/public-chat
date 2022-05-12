<template>
  <div class="publicRoomsContainer">
    <PublicRoomPreview
      v-for="(room, idx) in mockPublicRooms"
      :key="idx"
      v-bind="room"
    />
  </div>
</template>

<script>
const mockPublicRooms = [
  {
    roomName: 'Comics',
    people: 590,
    id: 'a20f61da-d193-11ec-9d64-0242ac120002',
  },
  {
    roomName: 'Juegos',
    people: 300,
    id: 'a20f7d46-d193-11ec-9d64-0242ac120002',
  },
  {
    roomName: 'Amistad',
    people: 108,
    id: 'a20f706c-d193-11ec-9d64-0242ac120002',
  },
  {
    roomName: 'Libros',
    people: 50,
    id: 'a20f8692-d193-11ec-9d64-0242ac120002',
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
</style>
