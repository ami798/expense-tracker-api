import express from "express";
import cors from "cors";
import { env } from "./config/env";
import routes from "./routes";
import { errorHandler, notFound } from "./middlewares/error.middleware";

const app = express();
app.use(cors({ origin: env.FRONTEND_URL })); 
app.use(express.json());                     
app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use(routes);
app.use(notFound);     
app.use(errorHandler); 

export default app;
