<template>
  <div class="directRoomsContainer">
    <router-link to="/chat/uuid-random-123">
      <ChatPreview v-for="(dm, idx) in mockDM" :key="idx" v-bind="dm"
    /></router-link>
  </div>
</template>

<script>
const mockDM = [
  {
    name: 'Daniel',
    online: true,
    lastMessage: 'Que más!',
    time: '09:00',
    id: 'abc123',
  },
  {
    name: 'Carlos',
    online: false,
    lastMessage: 'Cómo sería',
    time: '09:00',
    id: 'abc124',
  },
  {
    name: 'Alfredo',
    online: true,
    lastMessage: 'Vamos a jugar o qué',
    time: '09:00',
    id: 'abc125',
  },
];

import ChatPreview from '@/components/ChatPreview.vue';
export default {
  name: 'DirectRooms',
  components: { ChatPreview },
  data() {
    return {
      mockDM,
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

* {
  text-decoration: none;
  color: inherit;
}
</style>
