
const types={
  ADD_TODO: 'ADD_TODO',
  GET_INFO_TODO:'GET_INFO_TODO'
  }
export default {
  namespaced:true,

  state(){
    return {
      todo: JSON.parse(localStorage.getItem('todos')) || [],
      todoInfo: JSON.parse(localStorage.getItem('todosInfo')) || []
    }
  },
  getters: {
    todo(state){
      return state.todo
    },
    todoInfo(state){
      return state.todoInfo
    }
  },
  mutations: {
    [types.ADD_TODO](state, payload){
      state.todo.push({
        title:payload.title,
        text:payload.main
      })
      localStorage.setItem('todos', JSON.stringify(state.todo))
    },
    [types.GET_INFO_TODO](state, payload){
      state.todoInfo= state.todo[payload]
      localStorage.setItem('todosInfo', JSON.stringify(state.todoInfo))
      console.log(state.todoInfo)
    }
  },
  actions: {
    addTodo({commit}, payload) {
      commit(types.ADD_TODO, payload)
    },
    getInfoTodo({commit}, payload) {
      commit(types.GET_INFO_TODO, payload.index)
    }
  }
}