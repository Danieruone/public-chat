<template>
  <div class="messageContainer" :class="{ selfUserColor: selfUser }">
    <div>
      <strong>{{ chatName }}:</strong>
    </div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'ChatPreview',
  props: {
    name: String,
    message: String,
    id: String,
  },
  setup(props) {
    const store = useStore();
    const selfUser = store.state.profileModule.id === props.id;
    const chatName = selfUser ? 'Me' : props.name;

    return { chatName, selfUser };
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
  margin-right: 10px;
}

.messageContainer p {
  background-color: #01cef9;
  border-radius: 20px;
  color: white;
  padding: 5px 10px;
  margin: 0;
}

.selfUserColor p {
  background-color: #44bfc7;
}
</style>
