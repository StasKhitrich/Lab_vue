export default {
  state: {
    loggedUser: {}
  },
  mutations: {
    saveUserName(state, data) {
      state.loggedUser = data;
    },
  },
  actions: {
    saveUserName({ commit }, data) {
      commit('saveUserName', data)
    }
  },
  getters: {}
}
