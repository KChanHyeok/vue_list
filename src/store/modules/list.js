
const types={
  ADD_TODO: 'ADD_TODO'
  }
export default {
  namespaced:true,

  state(){
    return {
      todo: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  getters: {
    todo(state){
      return state.todo
    }
  },
  mutations: {
    [types.ADD_TODO](state, payload){
      state.todo.push({
        title:payload.title,
        text:payload.main
      })
      localStorage.setItem('todos', JSON.stringify(state.todo))
    }
  },
  actions: {
    addTodo({commit}, payload) {
      commit(types.ADD_TODO, payload)
      console.log(payload)
    }
  }
}