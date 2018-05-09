import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: {
      results: []
    },
    applicants: [],
    approvedProperty: null
  },
  mutations: {
    search (state, payload) {
      state.search.results = payload.results
    },
    addApplicant (state, payload) {
      state.applicants.push(payload)
    },
    approveCredit (state, payload) {
      state.approvedProperty = payload
      state.applicants = state.applicants.filter(tuple => tuple.property.address !== payload.address)
    }
  }
})
