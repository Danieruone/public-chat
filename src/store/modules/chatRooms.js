const state = {
  currentChatName: localStorage.getItem('currentChatName') || 'default name',
  publicChatRooms: [],
  directChatRooms: [
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
  ],
};

const mutations = {
  changeCurrentChatName(state, payload) {
    state.currentChatName = payload;
  },
  changePublicChatRooms(state, payload) {
    state.publicChatRooms = payload;
  },
};

const actions = {
  changeCurrentChatName(store, payload) {
    store.commit('changeCurrentChatName', payload);
  },
  changePublicChatRooms(store, payload) {
    store.commit('changePublicChatRooms', payload);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
