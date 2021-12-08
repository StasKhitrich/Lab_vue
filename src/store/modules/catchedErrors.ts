export default {
  state: {
    catchedErrors: []
  },
  mutations: {
    saveErrors(state, error) {
      state.catchedErrors.push(error);
      if (state.catchedErrors.length >= 5) {
        state.catchedErrors.shift();
      }
    },
  },
  actions: {
    saveErrors({ commit }, error) {
      commit('saveErrors', error);
    }
  },
  getters: {}
}
