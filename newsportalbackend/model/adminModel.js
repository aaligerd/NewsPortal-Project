const mongoose= require('mongoose');
const {Schema}=mongoose;
const bcrypt=require('bcryptjs');

const adminSchema=new Schema({
    loginid:{
        type:String,
        required:[true,"Id needed"]
    },
    password:{
        type:String,
        required:[true,"Password needed"]
    },
    mailid:{
        type:String,
        required:[true,"Mailid needed"]
    },
    name:{
        type:String,
            required:[true,"Name needed"]
        
    }

});
// Hashing the password
adminSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
    next();
    
})


const Admin =mongoose.model("Admin",adminSchema);
module.exports=Admin;