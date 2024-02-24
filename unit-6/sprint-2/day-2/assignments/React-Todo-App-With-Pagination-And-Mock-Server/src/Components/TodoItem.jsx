function TodoItem({todo ,onToggle,onDelete}) {
  return (
    <div data-testid="todo-item">
      {/* Add title,status of todo in p tags and TOGGLE, DELETE in buttons */}

      <p>{todo.title}</p>
      <p>Status: {todo.status ? 'Completed' : 'Not Completed'}</p>
      <button onClick={onToggle}>TOGGLE</button>
      <button onClick={onDelete}>DELETE</button>
    </div>
  );
}

export default TodoItem;
