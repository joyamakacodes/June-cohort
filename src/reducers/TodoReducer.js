
const InitialValue = {
  Todo: []
}

export const TodoReducer=(state= InitialValue, action)=>{

  switch(action.type){
    case "ADD_TODO":
      return {...state, Todo: [...state.Todo, action.payload]}
    case "REMOVE_TODO":
      return state.Todo.filter((_, index) => index !== action.payload);
    default:
      return state
  }

}

