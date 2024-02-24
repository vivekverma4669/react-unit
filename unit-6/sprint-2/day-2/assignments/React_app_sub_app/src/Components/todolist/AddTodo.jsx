// src/Components/todolist/AddTodo.jsx
import React, { useState } from 'react';
import Button from '../common/button/Button';


const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState('');

  const handleAddTodo = () => {
    if (title.trim() !== ''){
      addTodo(title);
      setTitle('');
    }
  };

  return (
      <div>
      <input
        type="text"
        placeholder="Add a new todo"
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleAddTodo}>ADD</Button>
    </div>
  );
};

export default AddTodo;
