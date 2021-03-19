import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  console.log("teste");
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

specificationRoutes.get("/", (request, response) => {
  const all = specificationsRepository.list();

  return response.json(all);
});

export { specificationRoutes };
