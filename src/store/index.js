import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: null
  },
  getters: {
    getUser (state) {
      return state.tableData
    }
  },
  actions: {
    updateUser (context , data) {
      return context.commit('UPDATE_USER', data)
    },
  },
  mutations: {
    UPDATE_USER (state, data) {
      state.tableData = data
    },
  },
  modules: {
  }
})
