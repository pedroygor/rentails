import { Category } from "../cars/model/Category";

export interface ICategoryRepositories {
  create({ name, description }: ICategoryCreateDTO): Category,
  getAll(): Category[]
  findByName(name: string): Category | null,
}

export interface ICategoryCreateDTO {
  name: string,
  description: string,
};