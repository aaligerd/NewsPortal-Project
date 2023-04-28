const Category=require('../model/categorymodel');

// Get all category
const getCategory=async(req,res)=>{
    const allCategory=await Category.find();
    res.status(200).json({
        status:1,
        allCategory
    });
    
}

//get category by id
const getCategoryById=async(req,res)=>{
    const _id=req.params.id;
    const category=await Category.findById(_id);
    if(!category){res.status(400).json({status:0,msg:"No data found"}); return};
    res.status(200).json({status:1,msg:"Data found",category});
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

module.exports={getCategory,saveCategory,getCategoryById};