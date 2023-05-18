const mongoose=require('mongoose');
const {Schema}=mongoose;
const dailyhitcountsSchema=new Schema({
    todayHit:{
        type:Number,
        required:true,
        default:0
    }
})
const Dailyhitcount=mongoose.model("DailyHitCount",dailyhitcountsSchema);
module.exports=Dailyhitcount;