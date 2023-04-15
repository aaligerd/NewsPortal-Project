const express = require('express');
const dotenv=require('dotenv').config();
const mongoose=require('mongoose');
const app=express();


//connect database first the start the server
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        const PORT=process.env.PORT|| 3030;
        app.listen(PORT,()=>{
            console.log("Database Connected\nServer running on port: "+PORT);
        })
    })
