const express=require('express');
const route=express.Router();
const{getCategory,saveCategory,getCategoryById}=require('../controller/categoryController');


//get all category
route.get('/all',getCategory);


//get a gategory by id
route.get('/get/:id',getCategoryById);

//save a gategory
route.post('/savecategory',saveCategory);

module.exports=route;