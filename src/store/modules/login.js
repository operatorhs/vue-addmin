import { login } from '../../api/login'

const state = {
  token: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  get_login_token ({commit}, data) {
    return new Promise((resolve, reject) => {
      login(data).then(res => {
        commit('SET_TOKEN', JSON.stringify(res.data.token[0]))
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
