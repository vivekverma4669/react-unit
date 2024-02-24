const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;
const app = express();

app.use(cors());
app.use(bodyParser.json());
const TODO_FILE_PATH = './todos.json';

async function readTodos() {
  try {
    const data = await fs.readFile(TODO_FILE_PATH);
    return JSON.parse(data) || [];
  } catch (error) {
    return [];
  }
}

async function writeTodos(todos) {
  await fs.writeFile(TODO_FILE_PATH, JSON.stringify(todos, null, 2), 'utf8');
}

app.get('/todo', async (req, res) => {
  const todos = await readTodos();
  res.json(todos);
});

app.post('/todo', async (req, res) => {
  const todos = await readTodos();
  const newTodo = req.body;
  todos.push(newTodo);
  await writeTodos(todos);
  res.json(newTodo);
});

app.put('/todo/:id', async (req, res) => {
  const todos = await readTodos();
  const updatedTodo = req.body;
  const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
  if (index !== -1) {
    todos[index] = updatedTodo;
    await writeTodos(todos);
    res.json(updatedTodo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});


app.delete('/todo', async (req, res) => {
  const todos = await readTodos();
  const { id } = req.body;
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  await writeTodos(updatedTodos);
  res.json({ id });
});


app.listen(3000, () => {
  console.log(`Server is running on http://localhost: 3000`);
});

