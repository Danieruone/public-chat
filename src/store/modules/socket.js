const state = {
  socket: new WebSocket(process.env.VUE_APP_SOCKET_CONNECTION),
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
