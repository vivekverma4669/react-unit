import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete, removeTodo, addTodo } from '../Redux/action';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  // useEffect(() => {
  //   fetch('http://localhost:4000/todos')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch(addTodo(data));
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching todos:', error);
  //     });
  // }, [dispatch]);

  return (
    <>
      <h1>TodoList</h1>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <button onClick={() => dispatch(toggleComplete(todo.id))}>
              Toggle Complete
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove Todo
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
