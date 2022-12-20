import { ICategoryRepositories } from './../interfaces/ICategoryRepositories';
import { CategoryRepository } from '../repositories/CategoryRepository';

interface IRequest {
  name: string,
  description: string
}

class CreateCategoryService {
  constructor(private categoriesRepositories: ICategoryRepositories){}
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepositories.findByName(name);

    if(categoryAlreadyExists) {
      throw new Error('Category Already Exists');
    }

    const newCategory = this.categoriesRepositories.create({ name, description });
  }
}

export { CreateCategoryService };