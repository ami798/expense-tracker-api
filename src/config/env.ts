
import dotenv from "dotenv";

dotenv.config(); 

export const env = {
  PORT: Number(process.env.PORT) || 4000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/expense_tracker",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
};
