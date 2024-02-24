const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const secretKey = 'secret'; 


const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401); 

  jwt.verify(token.split(' ')[1], secretKey, (err, user) => {
    if (err) return res.sendStatus(403); 
    req.user = user;
    next();
  });
};



app.get('/', (req, res) => {
  res.send('Homepage - Accessible without token');
});

app.get('/products', authenticateToken, (req, res) => {
  res.json(' you are  on products page ');
});

app.get('/posts', authenticateToken, (req, res) => {
  res.json(' you are  on  posts page ');
});

app.get('/todos', authenticateToken, (req, res) => {
  res.json(' you are on todos page');
});


app.post('/login', (req, res) => {
  const { email } = req.body;
  const user = { email: email }; 
  console.log(user);

  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
  res.json({ token });
});


app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
