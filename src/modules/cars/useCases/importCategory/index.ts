import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importcategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
  importcategoryUseCase
);

export { importCategoryController };
