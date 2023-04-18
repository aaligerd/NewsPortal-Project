const Admin=require('../model/adminModel');

const registerAdmin=async(req,res)=>{
    try {
        const newAdmin=await Admin.create(req.body);
        res.status(200).json(newAdmin);

    } catch (error) {
        console.error(error);
        res.status(400).json({msg:"Error while creating admin"});
    }
}






module.exports={registerAdmin};