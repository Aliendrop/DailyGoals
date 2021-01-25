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
      localStorage.removeItem('token')
      state.state.token = null
    },
  },
  actions: {},
}
