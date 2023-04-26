const Admin = require("../model/adminModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const bcrypt = require("bcryptjs");

const generateToken = (id) => {
  const jwtSignOption={expiresIn: "1d"};
  return jwt.sign({ id }, process.env.MY_SECRET_KEY, jwtSignOption);
  
};

const registerAdmin = async (req, res) => {
  try {
    //object destructure
    const { name, emailid, password, loginid } = req.body;
    if (!name || !emailid || !password || !loginid) {
      res.status(400).json({ msg: "Provide all fields" });
      return;
    }
    const existAdmin = await Admin.findOne({ emailid });
    if (existAdmin) {
      res.status(400).json({ msg: "You are already registered" });
      return;
    }
    const newAdmin = await Admin.create(req.body);
    const { id } = newAdmin;
    const authToken = generateToken(id);


    //set the authToken in cookies
    res.cookie("adminLoginAuthToken", authToken, {
      path: "/",
      httpOnly: true,
      // expires: new Date(Date.now() + 1000 * 86400 * 1), // 1 day
      sameSite: "none",
      secure: false,
    });
    
    res.json({ msg: "Admin registration successfull" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Some error occure while registering admin" });
  }
};

const adminLogin = async (req, res) => {
  try {
    //destructure body
    const { password, loginid } = req.body;

    //checking fields validation
    if (!password || !loginid) {
      res.status(400).json({ status:0,msg: "Provide all fields" });
      return;
    }
    

    //checking registerd admin or not
    const existAdmin = await Admin.findOne({ loginid });
    if (!existAdmin) {
      res
        .status(400)
        .json({ msg: "You are not registered,Please Register yourself" });
        return;
    }

    //checking password
    const passChek = await bcrypt.compare(password, existAdmin.password);
    if (!passChek) {
      res.status(400).json({ msg: "Invalid loginid or Password" });
      return;
    }
    const { id } = existAdmin;

    //generating webtoken for validation
    const authToken = generateToken(id);
   res.cookie("adminLoginAuthToken", authToken, {
      httpOnly: true,
      expires: new Date(Date.now()+ 1000 * 86400 * 5 ), // 1 day
    });
    res.status(200).json({status:1, msg: "Admin Login successfull",existAdmin });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Some error occure while login admin" });
  }
};

const adminLogout = async(req,res)=>{
  res.clearCookie("adminLoginAuthToken");
  res.status(200).json({status:1,msg:"Logged out successfully"});
};

const adminUpdate = async (req, res) => {
  try {
    //destructure request body
    let { name, emailid, password, loginid } = req.body;
    const {id} = req.params;

    //find admin by id
    const findAdmin = await Admin.findById( {_id:id });
    //check admin extist or not
    if(!findAdmin){res.status(400).json({status:0,msg:"Admin not exist"});return;}

    //hash the new password
    const salt=await bcrypt.genSalt(10);
    password=await bcrypt.hash(password,salt);

    //update the admin details
    const updtedAdmin=await Admin.findByIdAndUpdate({_id:id},{ name, emailid, password, loginid });
    
    if(!updtedAdmin){res.status(400).json({status:0, msg: "Admin Update unsuccessfull" });return;}
    res.status(200).json({status:1,msg:"Admin Update Successfull"});
  } catch (error) {
    console.error(error);
    res.status(400).json({status:0, msg: "Some error occure while Updating admin" });
  }
};

const clearAllCookies = (req, res) => {
  res.clearCookie("adminLoginAuthToken");
  res.clearCookie('pageVisits');
  res.clearCookie("authToken");
  res.send("Cookie clear");
};

module.exports = { registerAdmin, adminLogin, adminUpdate, clearAllCookies,adminLogout};
