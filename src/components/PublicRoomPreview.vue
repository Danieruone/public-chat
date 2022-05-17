<template>
  <router-link
    class="publicRoomPreviewContainer"
    :to="`/chat/${id}`"
    @click="setChatStoreName"
  >
    <span
      ><strong> {{ name }}</strong></span
    >
    <span>{{ people }}</span>
  </router-link>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: 'PublicRoomPreview',
  props: {
    name: String,
    people: Number,
    id: String,
  },
  setup(props) {
    const store = useStore();

    const setChatStoreName = () => {
      localStorage.setItem('currentChatName', props.name);
      store.dispatch('chatRooms/changeCurrentChatName', props.name);
    };

    return { setChatStoreName };
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
