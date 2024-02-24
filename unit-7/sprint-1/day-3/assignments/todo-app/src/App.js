import React, { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editId, setEditId] = useState('');
  const [editName, setEditName] = useState('');

  const api = `http://localhost:3000/todo`;


  const getData=  async ()=>{
    const res= await fetch(api);
    const data = await res.json();
    console.log(data);
    setTodos(data);
  }

  useEffect(() => {
      getData();
  },[]);


  const addTodo = async () => {
    try {
      let res = fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: Date.now(), title: newTodo , completed:  false })
      })
      let data =res.json();
      setTodos(data)
       

    }
    catch (error) {
       console.log(error);
    }
      
  };

  const deleteTodo = (id) => {
    fetch(api, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => console.error('Error deleting todo:', error));
  };

  const putTodo = async () => {
    try {
      const res = await fetch(`${api}/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: editId, title: editName }),
      });
  
      if (res.ok) {
        const updatedTodos = todos.map((todo) =>
          todo.id === editId ? { ...todo, title: editName } : todo
        );
        setTodos(updatedTodos);
        setEditId('');
        setEditName('');
      } else {
        console.error('Error editing todo:', res.status, res.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div style={{width: '33%' , margin:'auto'}}>
      <h1>Todo-APP</h1>
     
      <div>
        <input type="text" required value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </div>


      <div  style={{border :'2px solid red '  , padding: '30px' }}>
        <input type="text"  value={editId} onChange={(e) => setEditId(e.target.value)} placeholder="Enter Todo ID" required/>
        <input type="text"  value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Enter  name  for edit " required/>
        <button onClick={putTodo}>Edit Todo</button>
      </div>



          <h3 style={{textAlign:'center'}}>Todo List
          {todos.map((todo) => (
          <div key={todo.id} style={{border :'2px solid black' , margin : '10px', padding:'10px'}} >
          {todo.title}
          <button onClick={() => setEditId(todo.id) }>edit todo </button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
          ))}
        </h3>


    </div>
  );
};

export default App;
