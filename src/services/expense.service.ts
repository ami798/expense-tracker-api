import { Expense } from "../models/expense.model";
import { Category } from "../types/types";
import { CreateExpenseInput, UpdateExpenseInput } from "../utils/schemas";
import { HttpError } from "../utils/httpError";

export const createExpense = (data: CreateExpenseInput) => Expense.create(data);

export const getExpenses = (category?: Category) =>
  Expense.find(category ? { category } : {}).sort({ date: -1 }); 

export const getExpenseById = async (id: string) => {
  const expense = await Expense.findById(id);
  if (!expense) throw new HttpError(404, "Expense not found");
  return expense;
};

export const updateExpense = async (id: string, data: UpdateExpenseInput) => {
  const expense = await Expense.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  if (!expense) throw new HttpError(404, "Expense not found");
  return expense;
};

export const deleteExpense = async (id: string) => {
  const expense = await Expense.findByIdAndDelete(id);
  if (!expense) throw new HttpError(404, "Expense not found");
};

export const getSummary = async () => {
  const groups = await Expense.aggregate<{ _id: Category; total: number; count: number }>([
    { $group: { _id: "$category", total: { $sum: "$amount" }, count: { $sum: 1 } } },
    { $sort: { total: -1 } },
  ]);
  const byCategory = groups.map(({ _id, total, count }) => ({ category: _id, total, count }));
  const total = byCategory.reduce((sum, item) => sum + item.total, 0);
  return { total, byCategory };
};
