import mongoose from "mongoose";
const CatagorySchema= new mongoose.Schema({
   name:{
    type:String,
    unique:true,
    required:true,
    minLength: 4,
    trim:true,
   },
   slug:{
    type:String,
    unique:true,
    required:true,
   },
   image:{
    type:String,
    default:null,
   },
   status:{
    type:Boolean,
    default:true
   },
   flag:{
    type:[String],
    enum:["home","best","top"],
    default:[]

   }
},
{
    timestamps:true
}
)
export default mongoose.model("category",CatagorySchema);