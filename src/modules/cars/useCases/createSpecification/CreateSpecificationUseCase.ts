import { inject, injectable } from 'tsyringe';
import { ISpecificationRepository } from '../../../interfaces/ISpecificationsRepository';

interface IRequest {
  name: string,
  description: string,
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository
    ){}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification Already Exists');
    }
    
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };