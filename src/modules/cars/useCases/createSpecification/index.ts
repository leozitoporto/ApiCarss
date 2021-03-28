import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export default (): CreateSpecificationController => {
  const categoriesRepository = new SpecificationsRepository();

  const createSpecificationUseCase = new CreateSpecificationUseCase(
    categoriesRepository
  );

  const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
  );

  return createSpecificationController;
};
