import CategoryModel from "../models/category.model.js";


const Create = async (req,res)=>{
try {
   const {name , slug } = req.body

  const category = await CategoryModel.findOne({name:name});
  if(category){
    return res.status(409).json({
    messege: "category alreday exist",
    success : false,
    })
}
  const categories = await CategoryModel.create(
    {
        name:name,
        slug:slug
    }
)
res.status(201).json({
    messege:"category Added",
    success: true,
    categories
})

} catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
}
const Read = async (req,res)=>{
try {
  const categories = await CategoryModel.find();
    res.status(200).json({
    messege:"Data Fetched",
    success: true,
    categories
})

} catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    }); 
}
}
const UpdatebyId = async (req,res)=>{
try {
    const {id}= req.params

    const category = await CategoryModel.findById({_id:id})
    if(!category){
         return res.status(404).json({
    messege: "category Not Found",
    success : false,
    })
    }
    const NewCategory = await CategoryModel.findByIdAndUpdate(id,{status:!category.status})

    res.status(201).json({
          messege:"Status Updated",
    success: true,
    NewCategory
    })
    
} catch (error) {
     return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    }); 
}
}
const deletebyId = async (req,res)=>{
try {
     const {id}= req.params

    const category = await CategoryModel.findById({_id:id})
    if(!category){
         return res.status(404).json({
    messege: "category Not Found",
    success : false,
    })
    }
   await CategoryModel.findByIdAndDelete(id)

    res.status(201).json({
          messege:"category Deleted",
    success: true,
    })
    
    
} catch (error) {
     return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    }); 
}
}

export {
    Create,Read,deletebyId,UpdatebyId
}
