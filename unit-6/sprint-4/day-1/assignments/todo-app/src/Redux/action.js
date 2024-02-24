export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  
  export const toggleComplete = (id) => ({
    type: 'TOGGLE_COMPLETE',
    payload: id,
  });
  
  export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    payload: id,
  });
  