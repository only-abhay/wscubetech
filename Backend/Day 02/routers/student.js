import express from "express";
import { create,gets,Update,StudentDelete } from "../controllers/student.js";
const StudentRouters = express.Router();
StudentRouters.post("/create", create );
StudentRouters.get("/get", gets );
StudentRouters.patch("/patch/:id", Update );
StudentRouters.delete("/delete/:id", StudentDelete );
export default StudentRouters;