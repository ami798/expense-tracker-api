import app from "./app";
import { env } from "./config/env";
import { connectDatabase } from "./db/mongo";

const startServer = async () => {
  await connectDatabase();
  app.listen(env.PORT, () => console.log(`Server running on http://localhost:${env.PORT}`));
};

startServer();
