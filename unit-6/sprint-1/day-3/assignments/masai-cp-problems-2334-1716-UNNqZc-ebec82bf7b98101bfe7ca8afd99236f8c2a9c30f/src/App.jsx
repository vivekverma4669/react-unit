import  Counter from './Components/counter/Counter';
import  AddTodo from './Components/todolist/TodoList';
import  Users  from './Components/users/Users';

function App() {
  return (
    <>
      <Counter/>
      <AddTodo/>
      <Users/>
      {/* import the Counter,TodoList, Users and add them here in the same order  */}
    </>
  );
}

export default App;
