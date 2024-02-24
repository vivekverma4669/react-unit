import { Routes, Route } from 'react-router-dom';
import TodoList from '../Pages/TodoList';
import Home from '../Pages/Home';
import TodoDetail from '../Pages/TodoDetail';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/todoList" element={<TodoList/>} />
      <Route path="/todo/:id" element={<TodoDetail/>} />
    </Routes>
  );
}
export default AllRoutes;
