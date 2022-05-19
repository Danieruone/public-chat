const storedProfile = JSON.parse(localStorage.getItem('profile'));

const state = {
  id: storedProfile?.id || '',
  name: storedProfile?.name || '',
};

const mutations = {
  setProfile(state, payload) {
    state.id = payload.id;
    state.name = payload.name;
  },
};

const actions = {
  setProfile(store, payload) {
    store.commit('setProfile', payload);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
