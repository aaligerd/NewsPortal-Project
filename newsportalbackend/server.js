const express = require('express');
const dotenv=require('dotenv').config();
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const app=express();
app.use(express.json());
app.use(cookieParser());


//connect database first the start the server
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        const PORT=process.env.PORT|| 3030;

        //routes
        //localhost:4040/subscription
        app.use('/subscription',require('./route/subscriptionRoute'));

           //localhost:4040/admin
           app.use('/admin',require('./route/adminRoute'));



        app.listen(PORT,()=>{
            console.log("Database Connected\nServer running on port: "+PORT);
        })
    })
    .catch((err)=>{
        console.error(err);
    });
