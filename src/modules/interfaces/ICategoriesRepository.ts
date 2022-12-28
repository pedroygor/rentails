import { Category } from "../cars/entities/Category";

export interface ICategoriesRepository {
  create({ name, description }: ICategoryCreateDTO): Promise<void>,
  getAll(): Promise<Category[]>
  findByName(name: string): Promise<Category | null>,
}

export interface ICategoryCreateDTO {
  name: string,
  description: string,
};