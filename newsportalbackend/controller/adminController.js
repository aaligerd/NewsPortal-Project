const Admin=require('../model/adminModel');
const jwt = require('jsonwebtoken');
const dotenv=require('dotenv').config();

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.MY_SECRET_KEY, {
      expiresIn: "1h",
    });
  };

const registerAdmin=async(req,res)=>{
    try {
        const {name,emailid,password,loginid}=req.body;
        if(!name || !emailid || !password || !loginid){
            res.status(400).json({msg:"Provide all fields"});
            return;
        }
        const existAdmin=await Admin.findOne({emailid});
        if(existAdmin){
            res.status(400).json({msg:"You are already registered"});
            return;
        }
        const newAdmin=await Admin.create(req.body);
        const {id}=newAdmin;
        const authToken=generateToken(id);
        res.cookie("authToken", authToken, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400*2), // 2 day
            sameSite: "none",
            secure: false,
          });
          res.json({msg:"See Cookie"})
    } catch (error) {
        console.error(error);
        res.status(400).json({msg:"Some error occure while registering admin"});
    }
}





module.exports={registerAdmin}