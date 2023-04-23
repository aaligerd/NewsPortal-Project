const express=require('express');
const route=express.Router();
const{getCategory,saveCategory}=require('../controller/categoryController');



route.get('/all',getCategory);

route.post('/savecategory',saveCategory);

module.exports=route;