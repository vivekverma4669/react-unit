import AddTodo from "./AddTodo";
import Pagination from "./Pagination";
import TodoItem from "./TodoItem";
import { useState,useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(3);
  const [totalTodos, setTotal] = useState(0);



  const handleDelete = async (todoId) => {
    try {
      setLoading(true);
      await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos/${todoId}`, {
        method: 'DELETE',
      });
      // After successful deletion, refetch the updated todos
      fetchTodos();
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (todoId, currentStatus) => {
    try {
      setLoading(true);
      await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos/${todoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: !currentStatus, // Toggle the status
        }),
      });
      // After successful toggle, refetch the updated todos
      fetchTodos();
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };




  // const handlePage = (newPage) => {
  //   setCurrentPage(newPage);
  // };

  const handleLimit = (event) => {
    let limit = event.target.value;
    setTodosPerPage(limit);
  };





  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos?_page=${currentPage}&_limit=${todosPerPage}`);
      const length=  await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`);
      let temp  = await length.json();
      setTotal(temp.length);
      console.log(response);
      const data = await response.json();
      setTodos(data);
      console.log(data);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
      setError(error);
    }
      
    
  };

  useEffect(() => {
    fetchTodos();
  }, [currentPage, todosPerPage]);






  return (
    <>
     <h1>Todos</h1>
      {/* Add select tag here for selecting the total no. of todos to be displayed */}
      <select onChange={handleLimit}  value={todosPerPage}>
      <option>3</option>
      <option>6</option>
      <option>9</option>
      </select>

      {/* Add AddTodo component here */}
      <AddTodo/>

      

      {/* Add all the todos here with the help of TodoItem component */}
      {loading && <h1 data-testid="loading">Loading...</h1>}
      {error && <h1 data-testid="err">Something went wrong..</h1>}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} 
          onDelete={() => handleDelete(todo.id)}
          onToggle={() => handleToggle(todo.id, todo.status)}
        />
      ))}


      {/* Add Pagination component here */}
       <Pagination
        currentPage={currentPage}
        todosPerPage={todosPerPage}
        totalTodos={totalTodos}
        setCurrentPage={setCurrentPage}
        setTodosPerPage={setTodosPerPage}
      />

    </>
  );
}

export default TodoList;
