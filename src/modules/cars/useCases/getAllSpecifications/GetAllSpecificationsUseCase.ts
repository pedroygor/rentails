import { inject, injectable } from 'tsyringe';
import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from './../../../interfaces/ISpecificationsRepository';

@injectable()
class GetAllSpecificationsUSeCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository
  ){}

  async execute(): Promise<Specification[]> {
    const allSpecifications = await this.specificationRepository.getAll();

    return allSpecifications;
  }

}

export { GetAllSpecificationsUSeCase };