<template>
  <div class="publicRoomsContainer">
    <PublicRoomPreview
      v-for="(room, idx) in publicChatRooms"
      :key="idx"
      v-bind="room"
    />
  </div>
</template>

<script>
import PublicRoomPreview from '@/components/PublicRoomPreview.vue';
export default {
  name: 'PublicRooms',
  components: { PublicRoomPreview },
  data() {
    return {
      publicChatRooms: this.$store.state.publicChatRooms,
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
