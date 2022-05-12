<template>
  <div class="publicRoomPreviewContainer">
    <span
      ><strong> {{ roomName }}</strong></span
    >
    <span>{{ people }}</span>
  </div>
</template>

<script>
export default {
  name: 'PublicRoomPreview',
  props: {
    roomName: String,
    people: Number,
  },
};
</script>

<style scoped>
.publicRoomPreviewContainer {
  padding: 1rem 2rem;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
