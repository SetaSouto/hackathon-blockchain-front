import axios from 'axios'

function search (text) {
  return axios.post('', {}).then(res => res.data)
}

function getProperty (rol) {
  return axios.get('').then(res => res.data)
}

function createProperty ({address, rol}) {
  return axios.post('', {}).then(res => res.data)
}

export default {
  search,
  getProperty,
  createProperty
}
