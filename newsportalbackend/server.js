const express = require('express');
const dotenv=require('dotenv').config();
const mongoose=require('mongoose');
const app=express();
app.use(express.json());


//connect database first the start the server
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        const PORT=process.env.PORT|| 3030;


        //subscription routes
        app.use('/subscription',require('./route/subscriptionRoute'));

        // admin routes
        app.use('/admin',require('./route/adminRoute'));



        app.listen(PORT,()=>{
            console.log("Database Connected\nServer running on port: "+PORT);
        })
    })
    .catch((err)=>{
        console.error(err);
    });
