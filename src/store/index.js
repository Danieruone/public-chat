import { createStore } from 'vuex';

// modules
import socketInstance from './modules/socket';
import chatModule from './modules/chats';

export const store = createStore({
  modules: { socketInstance, chatModule },
});
