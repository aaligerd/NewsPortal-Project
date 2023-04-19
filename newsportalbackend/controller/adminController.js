const Admin=require('../model/adminModel');

const registerAdmin=async(req,res)=>{
    try {
        const newAdmin=await Admin.create(req.body);
        res.status(200).json({newAdmin,"msg" : "Admin Created"});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg:"Some error occure while registering admin"});
    }
}





module.exports={registerAdmin}