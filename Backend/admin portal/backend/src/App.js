import "dotenv/config"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { connectdb } from "./config/connectdb.js";
const server = express();
import categoryRouter from "./routers/category.router.js"
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use("/category",categoryRouter)

connectdb().then(()=>{
server.listen(process.env.PORT,()=>{
    console.log("server is runnning on abhay")
})
}).catch((err)=>{
    process.exit(1)
  console.log(err)
})