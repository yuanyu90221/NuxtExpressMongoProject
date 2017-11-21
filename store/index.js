import Vuex from 'vuex'
import axios from 'axios'
const news = require('./news/news').news
const createStore = () => {
  return new Vuex.Store({
    modules: {
      news: news
    },
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
          commit('SET_USER', data)
        } catch (error) {
          // if user login
          if (error.response && error.response.status === 401) {
            throw new Error('Bad credentiasl')
          }
          if (error.response && error.response.status === 403) {
            throw new Error('Need to Activated')
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
        // console.log(username, passwd, email)
        try {
          const {data} = await axios.post('/api/register', {username, passwd, email})
          // console.log(data)
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
      },
      async changeProcess ({commit}, {isProcessing}) {
        console.log(isProcessing)
        commit('SET_PROCESSING_STATUS', isProcessing)
      },
      async changeDialogShow ({commit}, {isDialogShow}) {
        console.log(isDialogShow)
        commit('SET_DIALOG_STATUS', isDialogShow)
      },
      async changeDialogMsg ({commit}, {dialogMsg}) {
        console.log(dialogMsg)
        commit('SET_DIALOG_MESSAGE', dialogMsg)
      }
    },
    state: {
      authUser: null,
      registerStatus: null,
      isProcessing: false,
      isDialogShow: false,
      dialogMsg: null
    },
    mutations: {
      SET_USER: (state, user) => {
        state.authUser = user
      },
      SET_REGISTER_STATUS: (state, status) => {
        state.registerStatus = status
      },
      SET_PROCESSING_STATUS: (state, isProcessing) => {
        state.isProcessing = isProcessing
      },
      SET_DIALOG_STATUS: (state, isDialogShow) => {
        state.isDialogShow = isDialogShow
      },
      SET_DIALOG_MESSAGE: (state, dialogMsg) => {
        state.dialogMsg = dialogMsg
      }
    }
  })
}

export default createStore
