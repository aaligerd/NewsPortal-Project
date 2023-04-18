const mongoose= require('mongoose');
const {Schema}=mongoose;

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
const Admin =mongoose.model("Admin",adminSchema);
module.exports=Admin;