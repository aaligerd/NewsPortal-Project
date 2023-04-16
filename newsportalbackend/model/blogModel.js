const mongoose=require('mongoose');
const {Schema}=mongoose;

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
    news_image:{
        type:String,
        requried:[true,"A image needed to post a news"]
    },
    news_body:{
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
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const News=mongoose.model("News",blogSchema);
module.exports=News;