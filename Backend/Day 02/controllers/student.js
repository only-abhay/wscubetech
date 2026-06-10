import StudentModel from "../model/Student.js";

const create = async (req,res)=>{
        try {
        const student = await StudentModel.findOne({email:req.body.email});
        if(student){
            return res.status(200).json({
                message :"account already exist",
                success : false,
            })
        }
        const data = await StudentModel.create(
            {
                name:req.body.name,
                email:req.body.email,
                age:req.body.age,
                gender:req.body.gender,
            }
        );

        res.send({
            message: "Student created successfully",
            success: true,
            data
        });

    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
}

const gets = async (req,res)=>{
     try {
    const student = await StudentModel.find();
    res.status(201).json({
    message:"student Data fetched",
    success:true,
    students:student
    })
  

    
 } catch (error) {
     res.status(200).json({
            message: error.message,
            success: false
        });
 }
}
const Update = async (req,res)=>{
      try {
    const id= req.params.id
        const student= await StudentModel.findById(id)
       if(!student){
        return res.status(200).json({
            message:"student Not found",
            status:false
        })
       }
       const newData=   await StudentModel.findByIdAndUpdate(id,{
         status:!student.status
       })
        res.status(201).json({
        message:"data updated succesfully",
        success:true,
        data:newData
        })
    
        
    } catch (error) {
         res.status(200).json({
            message: error.message,
            success: false
        });
    }
}
const StudentDelete = async (req,res)=>{
      try {
    const id= req.params.id
        const student= await StudentModel.findById(id)
       if(!student){
        return res.status(200).json({
            message:"student Not found",
            status:false
        })
       }
  await StudentModel.deleteOne({_id:id})
        res.status(201).json({
        message:"data delete succesfully",
        success:true,
        })
    
        
    } catch (error) {
         res.status(200).json({
            message: error.message,
            success: false
        });
    }
}

export {
    create , gets , Update, StudentDelete
}