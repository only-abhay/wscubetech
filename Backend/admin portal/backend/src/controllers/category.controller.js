import catagoryModel from "../models/catagory.model.js";

const create =(req,res,next)=>{
    try {
        const {name,slug}=req.body
    } catch (error) {
        return res.status(500).json({
            msg: error,
            success:false
        })
    }
}
const Read =(req,res,next)=>{
    try {
      console.log(req.body)
    } catch (error) {
        return res.status(500).json({
            msg: error,
            success:false
        })
    }
}
const Update =(req,res,next)=>{
    try {
        console.log(req.body)
    } catch (error) {
        return res.status(500).json({
            msg: error,
            success:false
        })
    }
}
const DeletebyId =(req,res,next)=>{
    try {
                console.log(req.body)
    } catch (error) {
        return res.status(500).json({
            msg: error,
            success:false
        })
    }
}
const statusUpdate =(req,res,next)=>{
    try {
                console.log(req.body)
    } catch (error) {
        return res.status(500).json({
            msg: error,
            success:false
        })
    }
}
export{
    create,
    Read,
    Update,
    DeletebyId,
    statusUpdate

}