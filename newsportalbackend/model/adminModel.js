const mongoose= require('mongoose');
const {Schema}=mongoose;
const bcrypt=require('bcryptjs');

const adminSchema=mongoose.Schema({
    loginid:{
        type:String,
        required:[true,"Id needed"]
    },
    password:{
        type:String,
        required:[true,"Password needed"]
    },
    emailid:{
        type:String,
        required:[true,"Mailid needed"]
    },
    name:{
        type:String,
            required:[true,"Name needed"]
    },
    isActive:{
        type:Boolean,
        default:true
    }

});
adminSchema.pre("save",async(next)=>{
    try {
         const salt=await bcrypt.genSalt(10);
        const hashCode=await bcrypt.hash(this.password,salt);
        console.log(hashCode);
    next();
    } catch (error) {
        console.error(error);
    }
   
})


const Admin =mongoose.model("Admin",adminSchema);
module.exports=Admin;