// TODO add new store
const news = {
  state: {
    newList: null
  },
  actions: {
  },
  mutations: {
    SET_NEWS: (state, news) => {
      if (state.newList === null) state.newList = []
      state.newList = state.newList.push(news)
    }
  },
  getters: {
    currentNews: state => {
      return state.newList
    }
  }
}

module.exports.news = news
