const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors=require('cors');
const scheduler=require('node-schedule');
const {setDailyCronJob}=require('./controller/dailyStatController');

//create an express application
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors("*"));


//connect database first then start the server
mongoose  
  .connect(process.env.MONGO_URI)  
  .then(() => {
    const PORT = process.env.PORT || 3030;

    scheduler.scheduleJob("setDailyStats",'*/5 * * * * *',()=>{
      setDailyCronJob();
    })

    //routes
    //localhost:4040/subscription
    app.use("/subscription", require("./route/subscriptionRoute"));

    //localhost:4040/admin
    app.use("/admin", require("./route/adminRoute"));

    //localhost:4040/blogpost
    app.use("/blogpost", require("./route/blogPostRoute"));

    // localhost:4040/category
    app.use("/category",require("./route/categoryRoute"));

    // localhost:4040/user
    app.use("/user",require("./route/userRoute"));

    //for daily usefull stats
    app.use('/stats',require("./route/dailyStateRoute"));


    // app.use('/dailyhit',require('./route/dailyhitRoute'));

    app.listen(PORT, () => {
      console.log("Database Connected\nServer running on port: " + PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });
