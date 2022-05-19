import { createStore } from 'vuex';

// modules
import socketInstance from './modules/socket';
import chatRooms from './modules/chatRooms';
import chatModule from './modules/chatModule';
import profileModule from './modules/profileModule';

export const store = createStore({
  modules: { socketInstance, chatRooms, chatModule, profileModule },
});
