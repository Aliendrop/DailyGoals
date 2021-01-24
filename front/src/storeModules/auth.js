export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token'),
  },
  getters: {
    getToken: state => state.token
  },
  mutations: {
    removeToken (state) {
      localStorage.removeItem('jwt')
      state.state.jwt = null
    },
  },
  actions: {},
}
