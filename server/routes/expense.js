import express from "express";
import { createExpense, getAllExpense } from "../controllers/expense.js";

const router=express.Router();


router.post("/create",createExpense);
router.get("/:user_id/allexpense",getAllExpense);


export default router;