import { Specification } from "../cars/model/Specification";

export interface ICreateSpecificationDTO {
  name: string,
  description: string,
}

export interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Specification,
  findByName(name: string): Specification | undefined,
  getAll(): Specification[]
}

