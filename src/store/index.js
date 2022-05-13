import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      currentChatName: null,
      publicChatRooms: [
        {
          roomName: 'Comics',
          people: 590,
          id: 'a20f61da-d193-11ec-9d64-0242ac120002',
        },
        {
          roomName: 'Juegos',
          people: 300,
          id: 'a20f7d46-d193-11ec-9d64-0242ac120002',
        },
        {
          roomName: 'Amistad',
          people: 108,
          id: 'a20f706c-d193-11ec-9d64-0242ac120002',
        },
        {
          roomName: 'Libros',
          people: 50,
          id: 'a20f8692-d193-11ec-9d64-0242ac120002',
        },
      ],
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
  },
  getters: {
    directChatNumber(state) {
      return state.directChatRooms.length;
    },
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
