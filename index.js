require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
//const routes=require('./router');
const Emp=require("./models/emp");
const port=9000;

const app=express();
app.use(express.json());
//app.use('/api',routes);

//SCHEMA CREATION
const emp=new Emp({
    name:"saranya",
    age:32,
    dob:1989,
    email: "prabhasaranya90@gmail.com",
    dept:"developer",
    id:45,
    contactno:1234567890,
    jod:121223
});
emp.save().then(()=>{console.log("user saved Successfully")})

//API TESTING
 app.get ("/", (req,res)=>{
    res.send("hello world");
 });

 //API POST METHOD FOR USERNAME AND PASSWORD
 app.post("/createuser",(req,res)=>{
    console.log(req.body);
    const user=req.body;
    res.status(201).send(user);
 });

//DATABASE CONNECTION
mongoose.connect(process.env.DB_CONNECTION_STRING,{
    
})


 const database= mongoose.connection
 database.on ('error',(err)=> console.log(err))
 database.on ("connected",()=> console.log('Database Connected'))
 
//PORT LISTEN
 app.listen(port,()=>{
    console.log("listening to port" + port);
 });
