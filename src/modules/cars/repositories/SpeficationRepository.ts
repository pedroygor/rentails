import { ICreateSpecificationDTO, ISpecificationRepository } from "../../interfaces/ISpecificationsRepository";
import { Specification } from "../model/Specification";

class SpecificationRepository implements ISpecificationRepository{
  private specifications: Specification[];
  
  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if(!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find((specification) => specification.name === name);
    return specification;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const createAt = new Date();
    const specification = new Specification(name, description, createAt);

    this.specifications.push(specification);

    return specification;
  }

}

export { SpecificationRepository };