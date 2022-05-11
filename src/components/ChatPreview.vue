<template>
  <div class="chatPreviewContainer">
    <div class="avatar">
      <p>{{ name.split('')[0] }}</p>
      <div v-if="online" class="onlineStatus"></div>
    </div>
    <div>
      <h4>{{ name }}</h4>
      <span>{{ lastMessage }}</span>
    </div>
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

<style scoped>
.chatPreviewContainer {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
}

.avatar {
  background-color: #8e8e8e;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.onlineStatus {
  width: 13px;
  height: 13px;
  background: #3cc6b7;
  position: absolute;
  border-radius: 50%;
  bottom: 3px;
  right: 3px;
}

.chatPreviewContainer h4 {
  margin: 2px 0px;
  text-align: left;
}

.chatPreviewContainer span {
  font-size: 0.8rem;
  color: #8e8e8e;
}
</style>
