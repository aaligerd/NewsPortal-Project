const Admin = require("../model/adminModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const bcrypt = require("bcryptjs");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.MY_SECRET_KEY, {
    expiresIn: "1h",
  });
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
    res.cookie("authToken", authToken, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400 * 5), // 5day
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
    const { password, loginid } = req.body;
    if (!password || !loginid) {
      res.status(400).json({ msg: "Provide all fields" });
      return;
    }
    const existAdmin = await Admin.findOne({ loginid });
    if (!existAdmin) {
      res
        .status(400)
        .json({ msg: "You are not registered,Please Register yourself" });
      return;
    }
    const passChek = await bcrypt.compare(password, existAdmin.password);
    if (!passChek) {
      res.status(400).json({ msg: "Invalid loginid or Password" });
      return;
    }
    const { id } = existAdmin;
    const authToken = generateToken(id);
    res.cookie("authToken", authToken, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 28800), // 2 day
      sameSite: "none",
      secure: false,
    });
    res.status(200).json({ msg: "Admin Login successfull" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Some error occure while login admin" });
  }
};

const adminUpdate = async (req, res) => {
  try {
    let { name, emailid, password, loginid } = req.body;
    const {id} = req.params;
    const findAdmin = await Admin.findById( {_id:id });
    if(!findAdmin){res.status(400).json({status:0,msg:"Admin not exist"});return;}
    const salt=await bcrypt.genSalt(10);
    password=await bcrypt.hash(password,salt);
    const updtedAdmin=await Admin.findByIdAndUpdate({_id:id},{ name, emailid, password, loginid });
    console.log("Hello",updtedAdmin);
    if(!updtedAdmin){res.status(400).json({status:0, msg: "Admin Update unsuccessfull" });}
    res.status(200).json({status:updtedAdmin.modifiedCount,msg:"Admin Update Successfull"});
  } catch (error) {
    console.error(error);
    res.status(400).json({status:0, msg: "Some error occure while Updating admin" });
  }
};

const clearAllCookies = (req, res) => {
  res.clearCookie("authToken");
  res.clearCookie("token");
  res.send("Cookie clear");
};

module.exports = { registerAdmin, adminLogin, adminUpdate, clearAllCookies };
