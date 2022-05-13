<template>
  <div class="directRoomsContainer">
    <ChatPreview v-for="(dm, idx) in directChatRooms" :key="idx" v-bind="dm" />
  </div>
</template>

<script>
import ChatPreview from '@/components/ChatPreview.vue';
export default {
  name: 'DirectRooms',
  components: { ChatPreview },
  data() {
    return {
      directChatRooms: this.$store.state.directChatRooms,
    };
  },
};
</script>

<style scoped>
.directRoomsContainer {
  background-color: white;
  width: 100%;
  max-width: 600px;
  min-height: 80vh;
  border-radius: 30px;
  padding: 10px;
}
</style>
