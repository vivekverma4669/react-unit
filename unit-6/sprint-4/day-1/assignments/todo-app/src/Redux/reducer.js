const reducer =(state =[], action) =>{
  
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      case 'TOGGLE_COMPLETE':
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      case 'REMOVE_TODO':
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };

export default reducer;