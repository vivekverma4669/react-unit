// src/Components/todolist/TodoItem.jsx
import React from 'react';
import styles from './TodoItem.module.css';
import Button from '../common/button/Button';

const TodoItem = ({ todo, deleteTodo, toggleStatus }) => {
  return (

  <div data-testid="todo-item" className={styles.wrapper}> 
   
      <p>
        {todo.title} - {todo.status ? 'Completed' : 'Not Completed'}
      </p>
      <div>
      <Button onClick={() => toggleStatus(todo.id)}>TOGGLE</Button>
      <Button onClick={() => deleteTodo(todo.id)}>DELETE</Button>
      </div>
      
    </div> 
  );
};

export default TodoItem;
