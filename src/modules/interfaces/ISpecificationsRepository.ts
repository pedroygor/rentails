import { Specification } from "../cars/entities/Specification";

export interface ICreateSpecificationDTO {
  name: string,
  description: string,
}

export interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>,
  findByName(name: string): Promise<Specification | undefined>,
  getAll(): Promise<Specification[]>
}

