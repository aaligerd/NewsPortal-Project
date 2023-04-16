const {createSubPlan,updateSubPlan}=require('../controller/subscriptionController');
const express=require('express');
const route=express.Router();


//create new subscrption type
route.post('/new-subscription',createSubPlan);

//update subscrption type
route.put('/update-subscription/:id',updateSubPlan);




module.exports=route;