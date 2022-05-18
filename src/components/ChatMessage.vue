<template>
  <div class="messageContainer">
    <div></div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChatPreview',
  props: {
    name: String,
    message: String,
    id: String,
  },
};
</script>

<style scoped>
.messageContainer {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.messageContainer div {
  width: 20px;
  height: 20px;
  background-color: #ffc301;
  margin-right: 10px;
  border-radius: 50%;
}

.messageContainer p {
  background-color: #01cef9;
  border-radius: 20px;
  color: white;
  padding: 10px;
  margin: 0;
}
</style>
