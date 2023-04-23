const Blog =require('../model/blogModel');

//add  data to blog Collection
const addBlogPost=async(req,res)=>{
    const {title,description,image,postbody,author,keywords,category}=req.body;
    if(!title || !description || !image || !postbody || !author || !keywords || !category){
        res.status(400).json({status:0,msg:"Provide all fields"});
        return;
    }
    const newPost=await Blog.create(req.body);
    res.status(200).json({status:1,msg:"Post Uploded"});
}


//get all data from blog
const getBlogPost=async(req,res)=>{
    const allPost=await Blog.find();
    res.status(200).json({status:1,allPost});
}

//get data by id from blog
const getBlogPostById=async(req,res)=>{
    try {
        const _id=req.params.id;
        const singlePost=await Blog.findById(_id);
        res.status(200).json({status:1,singlePost});
    } catch (error) {
        res.status(400).json({status:0,msg:"Server Error while searching by id"});
        console.log(error)
    }
}

//get data by id from blog
const getBlogPostByCategory=async(req,res)=>{
    try {
        const category=req.params.category;
        const categoryPost=await Blog.find({category:category});
        if(categoryPost.length===0){
            res.status(400).json({status:0,msg:"No such category"});
        return;
        }
        res.status(200).json({status:1,categoryPost});
        return;
        
        
    } catch (error) {
        res.status(400).json({status:0,msg:"Server Error while searching category post"});
        console.log(error)
    }
}

module.exports={addBlogPost,getBlogPost,getBlogPostById,getBlogPostByCategory};