// Zod schemas: rules for data coming IN from the outside world (checked while the server runs).
import { z } from "zod";
import { CATEGORIES } from "../types/types";

export const createExpenseSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(100, "Title is too long (100 max)"),
  amount: z.number({ invalid_type_error: "Amount must be a number" }).positive("Amount must be greater than 0"),
  category: z.enum(CATEGORIES).default("other"),
  date: z.coerce.date().optional(), // accepts "2026-10-09" and turns it into a Date
});

// Update = same fields, but all optional, and at least one must be sent.
export const updateExpenseSchema = createExpenseSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, { message: "Send at least one field to update" });

export const idParamSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid expense id"), // a MongoDB id is 24 hex characters
});

export const listQuerySchema = z.object({
  category: z.enum(CATEGORIES).optional(),
});

// TypeScript types generated FROM the schemas, so the rules and the types can never disagree.
export type CreateExpenseInput = z.infer<typeof createExpenseSchema>;
export type UpdateExpenseInput = z.infer<typeof updateExpenseSchema>;
