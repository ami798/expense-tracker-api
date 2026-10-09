import { Document } from "mongoose";
export const CATEGORIES = ["food", "transport", "bills", "school", "shopping", "health", "entertainment", "other"] as const;
export type Category = (typeof CATEGORIES)[number]; 
export interface IExpense extends Document {
  title: string;
  amount: number;
  category: Category;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}
