import Subcription from './subscriptionModel';
const mongoose= require('mongoose');
const {Schema}=mongoose;

const userSchema= new Schema({
    name:{
        type: String,
        required:[true,"name needed"]
    },
    id:{
        type: String,
        required:[true,"id needed"]
    },
    email:{
        type: String,
        required:[true,"email needed"]
    },
    password:{
        type: String,
        required:[true,"password required"]
    },
    subscription_type:{
        type: mongoose.Schema.ObjectId,
        ref:Subcription,
    },
    joining_date:{
        type:Date,
        default:Date.now
    },
    sub_start_date:{
        type:Date
    },
    sub_end_date:{
        type:Date
    }
});
const User =mongoose.model("User",userSchema);
module.exports=User;