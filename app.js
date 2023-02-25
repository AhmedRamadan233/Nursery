const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


const app=express();
const port = process.env.PORT||8080;

const teacherRoute=require("./Routers/teacherRoute");
const childRoute=require("./Routers/childRoute");
const classRouter=require("./Routers/classRouter");
const loginRouter=require("./Routers/loginRouter");
const authorization = require("./Core/auth/authenticationMW");


//connected database
mongoose.set("strictQuery" , true);
mongoose.connect("mongodb://127.0.0.1:27017/Nursery")
        .then(()=>{
            console.log("DB connected");
            app.listen(port,()=>{
              console.log("I am Listening " + port);
            });//listen
        })
        .catch(error=>{
            console.log("Db Problem "+error);
        })



// cors to connect with server frontend
app.use(cors());
//middleware
//morgan //logs middle ware
app.use(morgan('tiny'));

//Routers
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//
app.use(loginRouter);
app.use(authorization);//authentication

//
app.use(teacherRoute);
app.use(childRoute);
app.use(classRouter);

//Not FOUND
app.use((request,response)=>{
  response.status(404).json({msg : "Middleware not found"});
});

//Error MiddleWrae
app.use((error,request,response,next)=>{   //Function.length
  response.status(error.status || 500).json({error:error.toString() || "Error"});
})






