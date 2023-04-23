const mongoose=require('mongoose');
const {Schema}=mongoose;
const Category=require('./categorymodel');

//need to pass an object which define the blog
const blogSchema=new Schema({
    title:{
        type:String,
        requried:[true,"Title needed"]
    },
    description:{
        type:String,
        requried:[true,"A short description needed "]
    },
    image:{
        type:String,
        requried:[true,"A image needed to post a news"]
    },
    postbody:{
        type:String,
        requried:[true,"A News body needed"]
    },
    author:{
        type:String,
        requried:true
    },
    keywords:{
        type:String
    },
    category:{
       type: mongoose.Schema.ObjectId,
       ref: Category
    },
    date:{
        type:Date,
        default:Date.now
    },
    view:{
        type:Number,
        default:0
    }
});

const News=mongoose.model("News",blogSchema);
module.exports=News;