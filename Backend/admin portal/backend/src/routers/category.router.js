import { Router } from "express";
import { create,Read,Update,DeletebyId,statusUpdate } from "../controllers/category.controller.js";
const router=Router()

router.post("/create",create)
router.get("/",Read)
router.put("/update/:id",Update)
router.delete("/delete/:id",DeletebyId)
router.patch("/status/:id",statusUpdate)

export default router