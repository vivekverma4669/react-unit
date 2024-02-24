import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: task, completed: false }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Todo added:', data);
        // Dispatch the addTodo action when the todo is added successfully
        dispatch(addTodo(data));
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });

    setTask('');
  };

  return (
    <>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Home;
