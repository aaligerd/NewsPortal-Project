const express=require('express');
const route=express.Router();
const {addBlogPost,getBlogPost,getBlogPostById,getBlogPostByCategory} =require('../controller/blogController');

//get all blogpost data
route.get('/',getBlogPost);

//get post data by id
route.get('/getpost/:id',getBlogPostById);

//get post data by id
route.get('/getpost/category/:category',getBlogPostByCategory);

//save blogpost data
route.post('/savepost',addBlogPost);



module.exports=route;