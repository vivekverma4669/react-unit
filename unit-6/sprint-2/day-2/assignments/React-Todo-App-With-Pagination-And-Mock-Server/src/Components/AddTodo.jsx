import { useState } from "react";

function AddTodo() {
  const [newTodo, setNewTodo] = useState('');

const AddTodo = async ()=>{
try {
  let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,{
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
   },
   body :JSON.stringify({title: newTodo , status :false}),
 })

} catch (error) {
  console.log(error);
}
}

  return <div data-testid="add-todo">{/* Add input tag and a button */}


  <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
  <button onClick={AddTodo}>ADD TODO</button>
  </div>;
}

export default AddTodo;
