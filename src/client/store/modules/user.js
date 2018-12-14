import axios from 'axios'
import * as types from '../mutation-types'

const user = {
  state: {
    name: 'luoqi'
  },
  mutations: {
    [types.GET_NAME]: (state) => {
      return state.name
    },
    [types.SET_NAME]: (state, name) => {
      state.name = name
    }
  },
  actions: {
    getNameByRestfulApi (context) {
      axios.get('/users/getUserName').then(res => context.commit(types.SET_NAME, res.data))
    }
  }
}

export default user
