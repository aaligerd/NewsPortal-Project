const mongoose=require('mongoose');
const {Schema}=mongoose;

//need to pass an object which define the blog
const subscriptionSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    duration:{
        type:String
    }
});

const Subscription=mongoose.model("Subscription",subscriptionSchema);
module.exports=Subscription;