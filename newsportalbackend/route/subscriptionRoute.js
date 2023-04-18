const {createSubPlan,updateSubPlan, deleteSubPlan, getSubPlan}=require('../controller/subscriptionController');
const express=require('express');
const route=express.Router();

// Getting all subscription type
route.get('/getallsub',getSubPlan);


//create new subscrption type
route.post('/new-subscription',createSubPlan);

//update subscrption type
route.put('/update-subscription/:id',updateSubPlan);

//delete subscrption type
route.delete('/delete-subscription/:id',deleteSubPlan);

module.exports=route;