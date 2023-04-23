const Category=require('../model/categorymodel');

// Get all category
const getCategory=async(req,res)=>{
    const allCategory=await Category.find();
    res.status(200).json({
        status:1,
        allCategory
    });
    
}

// Save category data

const saveCategory=async(req,res)=>{
    const{cat_id,name}=req.body;
    if(!cat_id||!name){
        res.status(400).json({
            status:1, msg:"provide all fields"
        });
    }
    const savedCategory=await Category.create(req.body);
    res.status(200).json({
        status:1,
        savedCategory
    });
    
}

module.exports={getCategory,saveCategory};