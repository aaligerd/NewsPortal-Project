const mongoose=require('mongoose');
const {Schema}=mongoose;
const viewSchema=new Schema({
    month:{
        type:String
    },
    day:{
        type:Number
    },
    todayViews:{
        type:Number,
    },
});

const View=mongoose.model("View",viewSchema);
module.exports=View;