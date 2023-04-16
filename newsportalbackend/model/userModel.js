const mongoose= require('mongoose');
const {Schema}=mongoose;

const userSchema= new Schema({
    user_name:{
        type: String,
        required:[true,"User_name needed"]
    },
    user_id:{
        type: String,
        required:[true,"user_id needed"]
    },
    user_password:{
        type: String,
        required:[true,"user_password required"]
    },
    subscription_type:{
        type: String,
        required:[true,"subscription_type required"]
    },
    joining_date:{
        type:Date,
        default:Date.now
    }
});
const User =mongoose.model("User",userSchema);
module.exports=User;