import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    actions: {
      nuxtServerInit ({commit}, {req}) {
        if (req.session && req.session.authUser) {
          console.log(req.session)
          commit('SET_USER', req.session.authUser)
        }
      },
      // for login
      async login ({commit}, {username, passwd}) {
        try {
          const {data} = await axios.post('/api/login', {username, passwd})
          console.log(data)
          commit('SET_USER', data)
        } catch (error) {
          // if user login
          if (error.response && error.response.status === 401) {
            throw new Error('Bad credentiasl')
          }
          throw error
        }
      },
      async logout ({commit}) {
        await axios.post('/api/logout')
        commit('SET_USER', null)
      },
      // for register
      async register ({commit}, {username, passwd, email}) {
        console.log(username, passwd, email)
        try {
          const {data} = await axios.post('/api/register', {username, passwd, email})
          console.log(data)
          commit('SET_REGISTER_STATUS', data)
        } catch (error) {
          if (error.response && error.response.status === 401) {
            throw new Error('Register Error')
          }
          throw error
        }
      },
      async clearStatus ({commit}) {
        commit('SET_REGISTER_STATUS', null)
      }
    },
    state: {
      authUser: null,
      registerStatus: null
    },
    mutations: {
      SET_USER: (state, user) => {
        state.authUser = user
      },
      SET_REGISTER_STATUS: (state, status) => {
        state.registerStatus = status
      }
    }
  })
}

export default createStore
