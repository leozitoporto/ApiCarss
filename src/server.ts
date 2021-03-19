import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specification", specificationRoutes);

app.get("/", (request, response) => {
  return response.json({ message: "hello world" });
});

app.listen(3333);
