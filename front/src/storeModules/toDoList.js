import axios from '@/requests'
import getUrl from '@/endpoints'

export default {
  namespaced: true,
  state: {
    data: [],
    error: null,
  },
  getters: {},
  mutations: {
    setData: (state, data) => state.data = data,
    setError: (state, errorMessage) => state.error = errorMessage
  },
  actions: {
    collectToDo ({ commit }) {
      axios
        .get(getUrl('todo'))
        .then(response => commit('setData', response.data))
        .catch(error => commit('setError', error.toString()))
    }
  },
}
