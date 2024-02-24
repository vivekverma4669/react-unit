const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan(':method :url :status :res[content-length]- :response-time ms :date :http-version'));

app.get('/', (req, res) => {
  res.send('Hello, i am vivek🙋‍♂️,  welcome !');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
