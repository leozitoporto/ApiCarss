import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/especification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepositoy";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specification = await this.specificationRepository.list();

    return specification;
  }
}

export { ListSpecificationsUseCase };
