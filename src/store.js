import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerId: 0
  },
  mutations: {
    setPlayerId (state, payload) {
      state.userId = payload
    }
  },
  actions: {
    setPlayerId ({ commit }, payload) {
      commit('setUserId', payload)
    }
  },
  getters: {
    playerId: (state) => (state.userId)
  }
})
