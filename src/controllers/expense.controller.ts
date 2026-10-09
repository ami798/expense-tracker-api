import { asyncHandler } from "../utils/asyncHandler";
import * as expenseService from "../services/expense.service";
import { Category } from "../types/types";

export const createExpense = asyncHandler(async (req, res) => {
  const expense = await expenseService.createExpense(req.body);
  res.status(201).json(expense); 
});

export const getExpenses = asyncHandler(async (req, res) => {
  const { category } = req.query as { category?: Category };
  res.json(await expenseService.getExpenses(category));
});

export const getExpense = asyncHandler(async (req, res) => {
  res.json(await expenseService.getExpenseById(req.params.id));
});

export const updateExpense = asyncHandler(async (req, res) => {
  res.json(await expenseService.updateExpense(req.params.id, req.body));
});

export const deleteExpense = asyncHandler(async (req, res) => {
  await expenseService.deleteExpense(req.params.id);
  res.status(204).send(); 
});

export const getSummary = asyncHandler(async (_req, res) => {
  res.json(await expenseService.getSummary());
});
