import axios from '@/requests'
import getUrl from '@/endpoints'

export default {
  namespaced: true,
  state: {
    data: [],
    error: null,
  },
  getters: {
    getData: state => state.data.length ? state.data : [{title: 'nothing', done: true, dummy: true}]
  },
  mutations: {
    setData: (state, data) => state.data = data,
    setError: (state, errorMessage) => state.error = errorMessage,
    setDataItem: (state, item) => state.data.unshift(item),
    setNewStatusItem: (state, itemIndex) => state.data[itemIndex].done = !state.data[itemIndex].done
  },
  actions: {
    collectToDo ({ commit }) {
      axios
        .get(getUrl('todo'))
        .then(response => commit('setData', response.data))
        // .then(() => console.log() )
        .catch(error => commit('setError', error.toString()))
    },
    addToDoItem({ commit }, itemTitle) {
      const payload = {
        title: itemTitle,
        done: false,
      }
      commit('setDataItem', payload)
      // TODO: post
    },
    changeStatus({commit}, itemID) {
      commit('setNewStatusItem', itemID)
      // TODO: patch
    },
  },
}
