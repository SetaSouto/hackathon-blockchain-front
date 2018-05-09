import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: {
      results: []
    },
    applicants: []
  },
  mutations: {
    search (state, payload) {
      state.search.results = payload.results
    },
    addApplicant (state, payload) {
      state.applicants.push(payload)
    }
  }
})
