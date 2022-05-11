<template>
  <div>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'ChatPreview',
  props: {
    name: String,
    online: Boolean,
    lastMessage: String,
    time: String,
  },
};
</script>

<style scoped></style>
