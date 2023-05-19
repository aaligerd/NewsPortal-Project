const express = require("express");
const router=express.Router();
const {getAllStats}=require('../controller/dailyStatController');

//geting total number of post
router.get('/dailystats',getAllStats);



module.exports=router;