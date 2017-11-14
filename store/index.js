import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
    return new Vuex.Store({
        actions: {
            nuxtServerInit ({commit}, {req}) {
                if(req.session && req.session.authUser) {
                    console.log(req.session)
                    commit('SET_USER', req.session.authUser)
                }
            },
            // for login
            async login({commit}, {username, passwd}) {
                try {
                    // console.log(username, passwd)
                    const {data} = await axios.post('/api/login', {username, passwd})
                    console.log(data)
                    commit('SET_USER', data)
                }
                catch(error){
                    // if user login
                    if (error.response && error.response.status === 401){
                        throw new Error('Bad credentiasl')
                    }
                    throw error    
                }
            },
            async logout({commit}) {
                await axios.post('/api/logout')
                commit('SET_USER', null)
            }
        },
        state: {
            authUser: null
        },
        mutations: {
            SET_USER: (state, user) => {
                state.authUser = user
            }
        }
    })
}

export default createStore