<template>
  <div class="publicRoomsContainer">
    <PublicRoomPreview
      v-for="(room, idx) in publicChatRooms"
      :key="idx"
      v-bind="room"
    />
    <span v-if="publicChatRooms.length === 0">Loading...</span>
  </div>
</template>

<script>
import PublicRoomPreview from '@/components/PublicRoomPreview.vue';

export default {
  name: 'PublicRooms',
  components: { PublicRoomPreview },

  computed: {
    publicChatRooms() {
      return this.$store.state.chatRooms.publicChatRooms;
    },
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
