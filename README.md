# Expense Tracker API

A simple CRUD REST API for tracking expenses, built with **Node.js, Express, TypeScript, MongoDB (Mongoose)** and **Zod**.

## Setup
1. `npm install`
2. Copy `.env.example` to `.env` and adjust it (MongoDB must be running locally, or use an Atlas URL).
3. `npm run dev`  (server on http://localhost:4000)

## Scripts
| Command | Description |
|---|---|
| `npm run dev` | Run with hot reload |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run the compiled server |

## Endpoints
| Method | Endpoint | Description |
|---|---|---|
| POST | `/expenses` | Create an expense `{ title, amount, category?, date? }` |
| GET | `/expenses` | List expenses, newest first. Optional `?category=food` |
| GET | `/expenses/:id` | Get one expense |
| PATCH | `/expenses/:id` | Update one or more fields |
| DELETE | `/expenses/:id` | Delete an expense |
| GET | `/expenses/summary` | Total spent and total per category |

Categories: `food, transport, bills, shopping, health, entertainment, other`.
Errors: 400 invalid input, 404 not found, 500 server error.

## Project structure
```
src/
  config/       environment settings
  db/           database connection
  models/       Mongoose models
  types/        TypeScript types
  utils/        Zod schemas and helpers
  services/     database logic
  controllers/  request/response handling
  routes/       URL to controller mapping
  middlewares/  validation and error handling
  app.ts        builds the Express app
  index.ts      starts the server
```
