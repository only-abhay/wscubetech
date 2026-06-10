import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import StudentRouters from "./routers/student.js";

const App = express();
App.use(express.json());
App.use(cors({origin:"http://localhost:3000"}))
App.use("/student",StudentRouters)



mongoose.connect("mongodb://127.0.0.1:27017/newData")
.then(() => {
    console.log("database connected");

    App.listen(5000, () => {
        console.log("server is running on 5000");
    });
})
.catch((err) => console.log(err));


// App.post("/student/create", async (req, res) => {
//     try {
//         const student = await StudentModel.findOne({email:req.body.email});
//         if(student){
//             return res.status(200).json({
//                 message :"account already exist",
//                 success : false,
//             })
//         }
//         const data = await StudentModel.create(
//             {
//                 name:req.body.name,
//                 email:req.body.email,
//                 age:req.body.age,
//                 gender:req.body.gender,
//             }
//         );

//         res.send({
//             message: "Student created successfully",
//             success: true,
//             data
//         });

//     } catch (error) {
//         res.status(500).send({
//             message: error.message,
//             success: false
//         });
//     }
// });

// App.get( "/student/get", async (req,res)=>{
//  try {
//     const student = await StudentModel.find();
//     res.status(201).json({
//     message:"student Data fetched",
//     success:true,
//     students:student
//     })
  

    
//  } catch (error) {
//      res.status(200).json({
//             message: error.message,
//             success: false
//         });
//  }
// })

// App.patch("/student/patch/:id", async (req,res)=>{
//     try {
//     const id= req.params.id
//         const student= await StudentModel.findById(id)
//        if(!student){
//         return res.status(200).json({
//             message:"student Not found",
//             status:false
//         })
//        }
//        const newData=   await StudentModel.findByIdAndUpdate(id,{
//          status:!student.status
//        })
//         res.status(201).json({
//         message:"data updated succesfully",
//         success:true,
//         data:newData
//         })
    
        
//     } catch (error) {
//          res.status(200).json({
//             message: error.message,
//             success: false
//         });
//     }
// })


// App.delete("/student/delete/:id", async(req,res)=>{
//       try {
//     const id= req.params.id
//         const student= await StudentModel.findById(id)
//        if(!student){
//         return res.status(200).json({
//             message:"student Not found",
//             status:false
//         })
//        }
//   await StudentModel.deleteOne({_id:id})
//         res.status(201).json({
//         message:"data delete succesfully",
//         success:true,
//         })
    
        
//     } catch (error) {
//          res.status(200).json({
//             message: error.message,
//             success: false
//         });
//     }
// })
