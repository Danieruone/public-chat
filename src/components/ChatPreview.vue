<template>
  <router-link class="chatPreviewContainer" to="/chat/uuid-random-123">
    <div class="avatar">
      <p>{{ name.split('')[0] }}</p>
      <div
        class="onlineStatus"
        :style="[
          online ? { background: '#3cc6b7' } : { background: '#ff3f3f' },
        ]"
      ></div>
    </div>
    <div>
      <div class="chatTitle">
        <h4>{{ name }}</h4>
      </div>
      <span>{{ lastMessage }}</span>
    </div>
  </router-link>
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
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #d6d6d6;
}

.chatPreviewContainer:last-child {
  border-bottom: none;
}

.avatar {
  background-color: #5099f4;
  width: 50px;
  height: 50px;
  color: white;
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

* {
  text-decoration: none;
  color: inherit;
}
</style>
