import { Category } from "../cars/model/Category";

export interface ICategoriesRepository {
  create({ name, description }: ICategoryCreateDTO): Category,
  getAll(): Category[]
  findByName(name: string): Category | null,
}

export interface ICategoryCreateDTO {
  name: string,
  description: string,
};