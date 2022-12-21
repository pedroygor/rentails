import { Specification } from '../../model/Specification';
import { ISpecificationRepository } from './../../../interfaces/ISpecificationsRepository';
class GetAllSpecificationsUSeCase {
  constructor(private specificationRepository: ISpecificationRepository){}

  execute(): Specification[] {
    const allSpecifications = this.specificationRepository.getAll();

    return allSpecifications;
  }

}

export { GetAllSpecificationsUSeCase };