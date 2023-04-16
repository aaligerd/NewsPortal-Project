const mongoose= require('mongoose');
const {Schema}=mongoose;

const adminSchema=new Schema({
    admin_loginid:{
        type:String,
        required:[true,"Id needed"]
    },
    admin_password:{
        type:String,
        required:[true,"Password needed"]
    },
    admin_mailid:{
        type:String,
        required:[true,"Mailid needed"]
    },
    admin_name:{
        type:String,
            required:[true,"Name needed"]
        
    }

});
const Admin =mongoose.model("Admin",adminSchema);
module.exports=Admin;