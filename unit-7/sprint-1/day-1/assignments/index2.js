const fs = require('fs');
const command = process.argv[2];
const args = process.argv.slice(3);


function readFile(filePath){
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(content);
}
function appendToFile(filePath,content){
  fs.appendFileSync(filePath, content);
  console.log(`Content appended to ${filePath}`);
}


function execute(command, args){

  switch (command) {
       case 'read': 
       readFile(args[0]);       
       break;

       case 'append':
        appendToFile(args[0], args[1]);
        break;
    
      default:
      break;
  }
}
execute(command,args);