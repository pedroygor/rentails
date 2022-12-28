import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../../interfaces/ICategoriesRepository";
import { Category } from "../../entities/Category";

@injectable()
class GetAllCategoriesUseCase {
  constructor(
      @inject('CategoryRepository')
      private categoriesRepository: ICategoriesRepository
    ){}
  
  async execute(): Promise<Category[]> {
    const allCategories = await this.categoriesRepository.getAll();

    return allCategories;
  }
}

export { GetAllCategoriesUseCase };