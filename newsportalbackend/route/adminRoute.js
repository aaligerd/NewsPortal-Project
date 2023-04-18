const express=require('express');
const { registerAdmin } = require('../controller/adminController');
const route=express.Router();


// create admin
route.post('/register',registerAdmin);





module.exports=route;