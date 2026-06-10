import mongoose from "mongoose";
export async function  connectdb(){
    try {
      const conne=  await  mongoose.connect("mongodb://localhost:27017/wsjp121")
      console.log(conne)
    } catch (error) {
        console.log(error)
    }
}