const state = {
  socket: new WebSocket('ws://159.203.189.250:8080/ws'),
  socketConnected: false,
};

const mutations = {
  reconnectSocket(state, payload) {
    state.socket = payload;
  },
  setSocketConnection(state, payload) {
    state.socketConnected = payload;
  },
};

const actions = {
  reconnectSocket(store, payload) {
    store.commit('reconnectSocket', payload);
  },
  setSocketConnection(store, payload) {
    store.commit('setSocketConnection', payload);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
