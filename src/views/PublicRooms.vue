<template>
  <div class="publicRoomsContainer">
    <PublicRoomPreview
      v-for="(room, idx) in publicChatRooms"
      :key="idx"
      v-bind="room"
    />
    <SpinnerComponent
      v-if="publicChatRooms.length === 0"
      class="spinner"
    ></SpinnerComponent>
  </div>
</template>

<script>
import PublicRoomPreview from '@/components/PublicRoomPreview.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';

export default {
  name: 'PublicRooms',
  components: { PublicRoomPreview, SpinnerComponent },

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
