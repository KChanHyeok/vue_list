
const types={
  ADD_TODO: 'ADD_TODO',
  GET_INFO_TODO:'GET_INFO_TODO',
  UPDATE_INFO_TODO: 'UPDATE_INFO_TODO'
  }
export default {
  namespaced:true,

  state(){
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      todoInfo: JSON.parse(localStorage.getItem('todosInfo')) || []
    }
  },
  getters: {
    todos(state){
      return state.todos
    },
    todoInfo(state){
      return state.todoInfo
    }
  },
  mutations: {
    [types.ADD_TODO](state, payload){
      state.todos.push({
        id:Math.random(),
        title:payload.title,
        text:payload.main
      })
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    [types.GET_INFO_TODO](state, payload){
      state.todoInfo = state.todos[payload]
      localStorage.setItem('todosInfo', JSON.stringify(state.todoInfo))
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    [types.UPDATE_INFO_TODO](state){
      localStorage.setItem('todosInfo', JSON.stringify(state.todoInfo))
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
  actions: {
    addTodo({commit}, payload) {
      commit(types.ADD_TODO, payload)
    },
    getInfoTodo({commit}, payload) {
      commit(types.GET_INFO_TODO, payload.index)
    },
    saveInfoTodo({commit}){
      commit(types.UPDATE_INFO_TODO)
    }
  }
}