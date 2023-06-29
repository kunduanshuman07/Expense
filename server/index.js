import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import expenseRoutes from "./routes/expense.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/auth", authRoutes);
app.use("/expense", expenseRoutes);
const PORT = process.env.PORT || 6001;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server Running on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
