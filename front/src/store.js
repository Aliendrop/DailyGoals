import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/storeModules/auth'
import ToDoList from '@/storeModules/toDoList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    ToDoList,
  },
})
