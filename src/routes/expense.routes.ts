import { Router } from "express";
import * as controller from "../controllers/expense.controller";
import { validate } from "../middlewares/validate.middleware";
import { createExpenseSchema, idParamSchema, listQuerySchema, updateExpenseSchema } from "../utils/schemas";

const router = Router();

router.get("/summary", controller.getSummary); 
router.get("/", validate(listQuerySchema, "query"), controller.getExpenses);
router.get("/:id", validate(idParamSchema, "params"), controller.getExpense);
router.post("/", validate(createExpenseSchema), controller.createExpense);
router.patch("/:id", validate(idParamSchema, "params"), validate(updateExpenseSchema), controller.updateExpense);
router.delete("/:id", validate(idParamSchema, "params"), controller.deleteExpense);

export default router;
