const express=require('express');
const route=express.Router();
const {addBlogPost,getBlogPost,getBlogPostById,getBlogPostByCategory,getUserBlogPostById} =require('../controller/blogController');

//get all blogpost data
route.get('/',getBlogPost);

//get post data by id(admin side send data)
route.get('/getpost/:id',getBlogPostById);

//get post data by id(user side send data)
route.get('/getpost/user/:id',getUserBlogPostById);

//get post data by id
route.get('/getpost/category/:category',getBlogPostByCategory);

//save blogpost data
route.post('/savepost',addBlogPost);



module.exports=route;