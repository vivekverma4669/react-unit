const express= require('express');

const app = express();

const midleware=(req,res,next)=>{
    const start= new Date().getTime();
    console.log(req.method +" " + req.url);
    
    next();
    const end= new Date().getTime();
    console.log(end-start)
   
}
app.use(midleware);

const limiterMidle=(req,res,next)=>{
   if(req.url==='/reports'){
      next();
   }
   else{
    res.send('sorry not allowed ')
   }
}
app.use(limiterMidle)
app.get('/',(req,res)=>{
   
     console.log(req.query);
  
    const {name , _age } = req.query;

     if(_age> 18){
        res.send('welcome ' +" " + name +" u are eligible " + _age);
     }else{
        res.send('u are under age  ' +" " + name +" ");
     }

});

app.get('/reports', (req,res)=>{
    console.log(req.params);
     res.send(req.params);
    
})
app.get('/user/:id', (req,res)=>{
    res.send(req.params.id);
 
})


app.listen(8000);