import Expense from "../models/Expense.js";
import User from "../models/User.js";

export const createExpense = async (req, res) => {
  try {
    const { emp_id, purpose, category, amount, date } = req.body;
    const user = await User.find({ emp_id: emp_id });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const newExpense = new Expense({
      emp_id,
      purpose,
      category,
      amount,
      date,
      status: "Pending",
    });
    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllExpense = async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await User.findById(user_id);
    if (!user) {
      res.status(400).json({ message: "User does not exist" });
    }
    const emp_id = user.emp_id;
    const expense = await Expense.find({ emp_id: emp_id });
    if (!expense) {
      res.status(400).json({ message: "No expense data found" });
    }
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
