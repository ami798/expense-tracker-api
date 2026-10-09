import { RequestHandler } from "express";
import { ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema, source: "body" | "query" | "params" = "body"): RequestHandler =>
  (req, _res, next) => {
    const result = schema.safeParse(req[source]);
    if (!result.success) return next(result.error);

    if (source === "body") req.body = result.data; 
    else Object.assign(req[source], result.data);
    next();
  };
