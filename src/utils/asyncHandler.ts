import { RequestHandler } from "express";

// Express 4 does not catch errors thrown inside async functions.
// This wrapper forwards them to the error middleware with next(error).
export const asyncHandler =
  (handler: RequestHandler): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
