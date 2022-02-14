let id = JSON.parse(localStorage.getItem('id')) || 1

const types = {
  ADD_LIST: 'ADD_LIST',
  GET_INFO_LIST: 'GET_INFO_LIST',
  UPDATE_INFO_LIST: 'UPDATE_INFO_LIST'
  }

export default {
  namespaced: true,

  state() {
    return {
      lists: JSON.parse(localStorage.getItem('list')) || [],
      listInfo: JSON.parse(localStorage.getItem('listsInfo')) || []
    }
  },
  getters: {
    lists (state) {
      return state.lists
    },
    listInfo (state) {
      return state.listInfo
    }
  },
  mutations: {
    [types.ADD_LIST] (state, payload) {
      state.lists.push({
        id: id++,
        title:payload.title,
        main:payload.main
      })
      localStorage.setItem('list', JSON.stringify(state.lists))
      localStorage.setItem('id', JSON.stringify(id))
    },
    [types.GET_INFO_LIST] (state, payload) {
      const index = state.lists.findIndex(list => {
        return list.id === payload
      });
      state.listInfo = state.lists[index]
      localStorage.setItem('listsInfo', JSON.stringify(state.listInfo))
    },
    [types.UPDATE_INFO_LIST] (state, payload) {
      const index = state.lists.findIndex(list => {
        return list.id === payload.id
      });
      state.lists[index] = payload
      localStorage.setItem('listsInfo', JSON.stringify(state.listInfo))
      localStorage.setItem('list', JSON.stringify(state.lists))
    }
  },
  actions: {
    addList ({commit}, payload) {
      commit(types.ADD_LIST, payload)
    },
    getInfoList ({commit}, payload) {
      commit(types.GET_INFO_LIST, payload.id)
    },
    updateInfoList ({commit}, payload) {
      commit(types.UPDATE_INFO_LIST, payload)
      console.log(payload)
    }
  }
}