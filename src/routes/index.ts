import { Router } from "express";
import expenseRoutes from "./expense.routes";

const router = Router();

router.use("/expenses", expenseRoutes);

export default router;
