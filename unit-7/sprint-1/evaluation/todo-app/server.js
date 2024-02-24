// const { create } = require('domain');
// const express = require('express');
const fs = require('fs');
// const app = express();
const todo_file= './todos.json';

    function saveTodo(updateT){
      const data = JSON.stringify(updateT,null,2);
      fs.writeFileSync(todo_file,data);

    }

    function loadTodo(){
        try {
              const data = fs.readFileSync(todo_file, 'utf-8');
              return JSON.parse(data);
        } catch (error) {
            //  console.log(error);
            return [];
        }
    }

   function listTask(){
    const todos= loadTodo();
    todos.forEach(ele => {
    console.log(` id : ${ele.id} , task name  : ${ele.title},  Task-Staus ${ele.completed} `)
    });
   }


   function deleteTask(id){
    const todos= loadTodo();
    const updateT = todos.filter(task => task.id !==id);
      
      if(todos.length!==updateT.length){
        saveTodo(updateT);
      console.log(`task to delete ${id} is complete `);
      }else{
        console.log('todo not found with given id ');
      }
    
   }

     function  updateTask(id, new_description){  // not working 
        const todos = loadTodo();
        const taskI= todos.findIndex(task => task.id==id);
        console.log(taskI);

        if(taskI !==-1){
        todos[taskI].title= new_description;
        saveTodo(todos);
        console.log(`task to update id: ${id}  done new title is ${new_description}`);
        }else{
            console.log(` task to update id ${id}  is failed`);
        }
      
     }

    function  addTask( id , description){
      const todos = loadTodo();
      const newObj = {
        userId :1,
        id:id ,
        title : description,
        completed : false,
      }
      todos.push(newObj);
      saveTodo(todos);
       console.log(` task to added ${description} with id ${id} is completed successfully`)
    }


  const [command , id , args]= process.argv.slice(2);

  switch (command) {
        case 'add':
          addTask(parseInt(id),args);
        break;
     
        case  'update':
          updateTask(id , args);
        break;

        case 'delete':
         deleteTask(parseInt(id));
        break;

        case 'list':
        listTask();
        break;

        default:
        console.log('Invalid command');
        break;
  }
