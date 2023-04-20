const Admin=require('../model/adminModel');

const registerAdmin=async(req,res)=>{
    try {
        // destructuring oject
        const{name,mailid,loginid,password}=req.body

        // checking missing field
        if(!name||!mailid||!password||!loginid){
            res.status(400).json({msg:"Some fields are missing"});
        } 
        // checking user existing database by mailid
        const existAdmin=await Admin.findOne({mailid});
        if(existAdmin){res.status(400).json({msg:"You are already registered. Please login"});}
        // if the mailid is not saved in database the register the admin
        const newAdmin=await Admin.create(req.body);
        res.status(200).json({msg:"Admin successfully registered"});




    } catch (error) {
        
    }
}






module.exports={registerAdmin};