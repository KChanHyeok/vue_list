
const types={
  ADD_LIST: 'ADD_LIST',
  GET_INFO_LIST:'GET_INFO_LIST',
  }
export default {
  namespaced:true,

  state(){
    return {
      lists: JSON.parse(localStorage.getItem('list')) || [],
      listInfo: JSON.parse(localStorage.getItem('listsInfo')) || []
    }
  },
  getters: {
    lists(state){
      return state.lists
    },
    listInfo(state){
      return state.listInfo
    }
  },
  mutations: {
    [types.ADD_LIST](state, payload){
      state.lists.push({
        title:payload.title,
        main:payload.main
      })
      localStorage.setItem('list', JSON.stringify(state.lists))
    },
    [types.GET_INFO_LIST](state, payload){
      state.listInfo = state.lists[payload]
      localStorage.setItem('listsInfo', JSON.stringify(state.listInfo))
      localStorage.setItem('list', JSON.stringify(state.lists))
    }
  },
  actions: {
    addList({commit}, payload) {
      commit(types.ADD_LIST, payload)
    },
    getInfoList({commit}, payload) {
      commit(types.GET_INFO_LIST, payload.index)
    }
  }
}