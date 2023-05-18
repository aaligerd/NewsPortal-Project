const View = require("../model/viewModel");
const News=require('../model/blogModel');


const getAllStats=()=>{
    console.log("HOLA");
}

const setDailyCronJob=async()=>{
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDate=new Date(Date.now());
    let today=currentDate.getDate()
    let current_month=month[currentDate.getMonth()];
    const total_post=await News.count();
    const total_views=await News.aggregate([{$group: { _id : null, totalview : { $sum: "$view" } } }]);
     // await View.create({
    //     month:current_month,
    //     day:today,
    //     todayViews:total_views[0].totalview
    // })
    console.log(today,current_month,total_post,);
}
module.exports={getAllStats,setDailyCronJob};