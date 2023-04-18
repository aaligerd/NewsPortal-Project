const Subscription =require('../model/subscriptionModel');
const createSubPlan=async(req,res)=>{
    try {
        const newSubscription=await Subscription.create(req.body);
        res.status(200).json(newSubscription);
    } catch (error) {
        console.error(error);
        res.status(400).json({msg:"Some internal error while adding new sub plan"});
    }
}

const getSubPlan=async(req,res)=>{
    try {
        const allSubPlan=await Subscription.find();
        res.status(200).json(allSubPlan);
    } catch (error) {
        console.error(error);
        res.status(400).json({msg:"Some internal error while getting sub plan"});
        
    }
}

const updateSubPlan=async(req,res)=>{

    try {
        const _id=req.params.id;
        const updatedSubPlan=await Subscription.findByIdAndUpdate({_id},req.body);
        res.status(200).json({updatedSubPlan,msg:"Data updated"});
        
    } catch (error) {
            res.status(400).json({msg:"Some internal error while updating sub plan"})
    }
}

const deleteSubPlan=async(req,res)=>{

    try {
        const _id=req.params.id;
        const deletedSubPlan=await Subscription.findByIdAndDelete({_id});
        res.status(200).json({deletedSubPlan,msg:"Data deleted"});
        
    } catch (error) {
            res.status(400).json({msg:"Some internal error while deleting sub plan"})
    }
}

module.exports={createSubPlan,updateSubPlan,deleteSubPlan,getSubPlan};