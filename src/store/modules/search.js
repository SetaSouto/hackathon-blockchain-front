export default {
  sate: {
    results: [{
      address: 'Av. Ohiggins 2377, Chillán',
      img: '',
      price: '20000 UF'
    }]
  },
  mutations: {
    setResults (state, payload) {
      state.results = payload.results
    }
  },
  actions: {
    search ({commit}, payload) {
      commit('setResults', {
        results: [{
          address: 'Vergara 726, depto 400, Santiago',
          img: '',
          price: '10000 UF'
        }]
      })
    }
  }
}
