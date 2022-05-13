import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      currentChatName: null,
    };
  },
  mutations: {
    changeCurrentChatName(state, payload) {
      state.currentChatName = payload;
    },
  },
  actions: {
    changeCurrentChatName(store, payload) {
      store.commit('changeCurrentChatName', payload);
    },
  },
});
