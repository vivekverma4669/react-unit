const fs= require('fs');
const cowsay = require('cowsay');
const dns =require('dns');


const file = './data.txt';

 function writeToFile(website){

    dns.lookup(website,(err, address, family)=>{
       if(err){
        console.log(` error for looking up website adress `);
        return;
       }
       const data = `URL : ${website} | Address : ${address}  | IPv4:${family}`
       console.log( `write successfully ${data}`);
       fs.writeFileSync(file, data);
    })
 }

 function readFromFile(filename){
    fs.readFile(filename,'utf-8', (err,data)=>{
        if(err){
            console.log('err reading ');
            return;
        }
        console.log(`file content of ${filename}: \n ${data}`);
    });
 }

 function cowSay(filename){
    fs.readFile(filename, 'utf-8', (err,data)=>{
        const cowmess= cowsay.say({text: data});
        console.log(cowmess);
    })
 }

 function deleteFile(filename){
    fs.unlink(filename, (err)=>{
        if(err){
            console.log(`failed to delete `)
            return;

        }
        console.log(`${filename} deleted successfully`);

    })
 }


 module.exports={
    writeToFile,
    readFromFile,
    cowSay,
    deleteFile,

 }