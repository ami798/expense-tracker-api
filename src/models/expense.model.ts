import { Schema, model } from "mongoose";
import { CATEGORIES, IExpense } from "../types/types";

const expenseSchema = new Schema<IExpense>(
  {
    title: { type: String, required: true, trim: true, maxlength: 100 },
    amount: { type: Number, required: true, min: 0.01 },
    category: { type: String, enum: [...CATEGORIES], default: "other" },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true } 
);

export const Expense = model<IExpense>("Expense", expenseSchema); 
