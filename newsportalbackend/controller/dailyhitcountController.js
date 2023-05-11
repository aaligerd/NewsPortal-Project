const {Dailyhitcount} =require('../model/dailyhitcounts');

const setdailyHit=async(req,res)=>{
    const t=await Dailyhitcount.create(req.body);
    res.send(t);
}

module.exports={setdailyHit};