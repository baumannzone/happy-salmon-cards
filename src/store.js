import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: 5
  },
  mutations: {
    setUserId (state, payload) {
      state.userId = payload
    }
  },
  actions: {
    setUserId ({ commit }, payload) {
      commit.setUserId(payload)
    }
  },
  getters: {
    userId: (state) => (state.userId)
  }
})
