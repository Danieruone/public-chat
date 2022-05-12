<template>
  <router-link class="publicRoomPreviewContainer" :to="`/chat/${id}`">
    <span
      ><strong> {{ roomName }}</strong></span
    >
    <span>{{ people }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'PublicRoomPreview',
  props: {
    roomName: String,
    people: Number,
    id: String,
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

.publicRoomPreviewContainer:last-child {
  border-bottom: none;
}

* {
  text-decoration: none;
  color: inherit;
}
</style>
