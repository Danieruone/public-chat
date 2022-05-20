<template>
  <div class="homeViewContainer">
    <div class="inputCard">
      <h3>Choose your name</h3>
      <input
        type="text"
        placeholder="Type your name..."
        v-model="profileName"
      />
      <button @click="setProfileName">Save</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'HomeView',
  setup() {
    const router = useRouter();
    const store = useStore();

    const profileName = ref('');

    const setProfileName = () => {
      if (profileName.value !== '') {
        store.dispatch('profileModule/setProfile', {
          name: profileName.value,
          id: '',
        });
        router.push('/rooms');
      }
    };

    return { setProfileName, profileName };
  },
};
</script>

<style scoped>
.homeViewContainer {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inputCard {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100px;
  position: relative;
  border: 2px solid black;
  max-width: 300px;
}

.inputCard h3 {
  margin: 10px 0px;
}

.inputCard input {
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #f5f7fb;
}

.inputCard button {
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #3ba58a;
  color: white;
  width: 100px;
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  margin: auto;
  border: 2px solid white;
  cursor: pointer;
}
</style>
