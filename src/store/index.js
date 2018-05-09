import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: {
      results: []
    }
  },
  mutations: {
    search (state, payload) {
      state.search.results = payload.results
    }
  }
})
