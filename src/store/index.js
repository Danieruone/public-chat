import { createStore } from 'vuex';

// modules
import socketInstance from './modules/socket';
import chatRooms from './modules/chatRooms';
import chatModule from './modules/chatModule';

export const store = createStore({
  modules: { socketInstance, chatRooms, chatModule },
});
