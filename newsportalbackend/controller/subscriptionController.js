const Subscription =require('../model/subscriptionModel');
const createSubPlan=async(req,res)=>{
    try {
        await Subscription.create(req.body);
        res.status(200).json({msg:"New Plan Created"});
    } catch (error) {
        console.error(error);
        res.status(400).json({msg:"Some internal error while adding new sup plan"});
    }
}

const updateSubPlan=async(req,res)=>{
    try {
        const _id=req.params.id;
        const updatedSubPlan=await Subscription.findByIdAndUpdate({_id},req.body);
        res.status(200).json({updatedSubPlan,msg:"Data updated"});
        
    } catch (error) {
            res.status(400).json({msg:"Some internal error while updating sup plan"})
    }
}

const deleteSubPlan=async(req,res)=>{
    const _id=req.params.id;
    const searchSub=await Subscription.findByIdAndDelete({_id});
    res.json(searchSub);
}


module.exports={createSubPlan,updateSubPlan,deleteSubPlan};