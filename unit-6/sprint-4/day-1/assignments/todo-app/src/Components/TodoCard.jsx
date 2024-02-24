import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, removeTodo } from '../Redux/action';

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: '2px solid black', backgroundColor: 'black' }}>
      <p>{todo.title}</p>
     
      <button onClick={() => dispatch(toggleComplete(todo.id))}>
      {todo.completed ? <p>Complete</p> : <p> toggle</p> }
      </button>
      <button onClick={() => dispatch(removeTodo(todo.id))}>
        Remove Todo
      </button>
    </div>
  );
};

export default TodoCard;
