const {createSubPlan,updateSubPlan,deleteSubPlan}=require('../controller/subscriptionController');
const express=require('express');
const route=express.Router();

//localhost:4040/subscription/new-subscription
//create new subscrption type
route.post('/new-subscription',createSubPlan);

//localhost:4040/subscription/update-subscription/:id
//update subscrption type
route.put('/update-subscription/:id',updateSubPlan);

//localhost:4040/subscription/delete-subscription/:id
//delete subscrption type
route.delete('/delete-subscription/:id',deleteSubPlan);



module.exports=route;