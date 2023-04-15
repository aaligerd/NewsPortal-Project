const express = require('express');
const dotenv=require('dotenv').config();
const app=express();

const PORT=process.env.PORT|| 3030;
app.listen(PORT,()=>{
    console.log("Server running on port: "+PORT);
})