// src/Components/todolist/TodoList.jsx
import React, {useState} from 'react';
import Container from '../common/container/Container';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const TodoList = () => {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { id: todos.length + 1,  title,  status: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleStatus= (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id? {...todo, status: !todo.status } : todo
      )
    );
  };




  return (
  <Container>
  
    <h1>Todo List</h1>
    <AddTodo addTodo={addTodo}/>
    <ul>{todos.map((todo) => (<TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}toggleStatus={toggleStatus}/> ))}</ul>

    </Container>
  );
};

export default TodoList;

