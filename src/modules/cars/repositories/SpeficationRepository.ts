import { ICreateSpecificationDTO, ISpecificationRepository } from "../../interfaces/ISpecificationsRepository";
import { Specification } from "../model/Specification";

class SpecificationRepository implements ISpecificationRepository{
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
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