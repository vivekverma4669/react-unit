const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const validateMovieData = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;
  if (!ID || !Name || !Rating || !Description || !Genre || !Cast) {
    return res.send( 'All fields are required.' );
  }
  if (typeof ID !== 'number' || typeof Name !== 'string' || typeof Rating !== 'number' ||
      typeof Description !== 'string' || typeof Genre !== 'string' || !Array.isArray(Cast)) {
    return res.send('Incorrect data types.' );
  }
  next();
};

app.use(bodyParser.json());
app.use(validateMovieData);

app.post('/movies', (req, res) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;
  res.send('Movie data received and saved  successfully.');
});


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});



//use this command  in new terminal
// Invoke-RestMethod -Method Post -Uri http://localhost:3000/movies -Headers @{"Content-Type"="application/json"} -Body '{"ID": 1, "Name": "Movie 1", "Rating": 4.5, "Description": "A great movie", "Genre": "Action", "Cast": ["Actor1", "Actor2"]}'
