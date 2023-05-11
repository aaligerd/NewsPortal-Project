const express=require('express');
const route=express.Router();
const {setdailyHit} =require('../controller/dailyhitcountController');

//get all blogpost data
route.post('/',setdailyHit);




module.exports=route;