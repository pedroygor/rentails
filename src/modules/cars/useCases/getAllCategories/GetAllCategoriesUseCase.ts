import { ICategoriesRepository } from "../../../interfaces/ICategoriesRepository";
import { Category } from "../../model/Category";

class GetAllCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository){}
  execute(): Category[] {
    const allCategories = this.categoriesRepository.getAll();

    return allCategories;
  }
}

export { GetAllCategoriesUseCase };