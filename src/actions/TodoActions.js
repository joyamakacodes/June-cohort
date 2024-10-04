export const addtodo = (todo)=>(
  {
    type: 'ADD_TODO',
    payload: todo,
  }
)

export const removetodo = (index)=>(
  {
    type: 'REMOVE_TODO',
    payload: index
  }
)