const express =require('express');
const { userRegister, userLogin } = require('../controller/userController');
const route= express.Router();

// user register route
route.post('/register',userRegister);

// user login route
route.get('/login',userLogin)







module.exports=route;