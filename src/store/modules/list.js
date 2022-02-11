
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

  },
  mutations: {
    [types.ADD_TODO](state, payload){
      state.todo.push({
        text:payload
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