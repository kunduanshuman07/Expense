import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    emp_id: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status:{
        type:String,
    }
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
