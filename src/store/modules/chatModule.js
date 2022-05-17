const state = {
  chatMessages: [],
};

const mutations = {
  addMessage(state, payload) {
    state.chatMessages = [...state.chatMessages, payload];
  },
  clearChat(state) {
    state.chatMessages = [];
  },
};

const actions = {
  addMessage(store, payload) {
    store.commit('addMessage', payload);
  },
  clearChat(store) {
    store.commit('clearChat');
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
