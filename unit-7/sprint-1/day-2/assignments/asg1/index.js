const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

  if(req.url==='/'){
    res.end('hello')
  }
  if(req.url==='/public'){

  }
  if(req.url==='/src'){
   
  }
})

server.listen(3000);
