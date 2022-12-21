import { ICategoriesRepository } from '../../../interfaces/ICategoriesRepository';

interface IRequest {
  name: string,
  description: string
}

class CreateCategoryUseCase {
  constructor(private categoriesRepositories: ICategoriesRepository){}
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepositories.findByName(name);

    if(categoryAlreadyExists) {
      throw new Error('Category Already Exists');
    }

    const newCategory = this.categoriesRepositories.create({ name, description });
  }
}

export { CreateCategoryUseCase };