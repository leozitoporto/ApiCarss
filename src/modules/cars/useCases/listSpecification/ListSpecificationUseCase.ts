import { Specification } from "../../model/especification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepositoy";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const specification = this.specificationRepository.list();

    return specification;
  }
}

export { ListSpecificationsUseCase };
