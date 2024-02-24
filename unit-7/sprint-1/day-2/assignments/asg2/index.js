const fs = require('fs');
const express = require('express');
const app = express();

const filePath = 'large.txt';
const smallFilePath = 'small.txt';

const textSync = fs.readFileSync(filePath, 'utf-8');
const textAsync = fs.promises.readFile(filePath, 'utf-8');
const textStream = fs.createReadStream(filePath);


app.get('/', (req, res) => {
    res.send('<h1>welcome 🙋‍♂️</h1><ul> <li>/textsync<li/>  <li>/textasync<li/>  <li>/textstream<li/> <ul/>');
  });


app.get('/textsync', (req, res) => {
  res.send(textSync);
});

app.get('/textasync', async (req, res) => {
  const data = await textAsync;
  res.send(data);
 });

 app.get('/textstream', (req, res) => {
  textStream.pipe(res)
 });


app.get('/textpromise', async (req, res) => {

  try {
    const data = await fs.promises.readFile(smallFilePath, 'utf-8');
    res.send(data);
  }
  catch (error) {
    console.error(error);
    res.send('Internal Server Error');
  }
});


app.listen(3000);