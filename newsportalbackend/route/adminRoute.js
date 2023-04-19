const express=require('express');
const route=express.Router();
const {registerAdmin}=require('../controller/adminController');

//register new admin
route.post('/register',registerAdmin);




module.exports=route;