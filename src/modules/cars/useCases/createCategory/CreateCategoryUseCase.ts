import { ICategoriesRepository } from '../../../interfaces/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string,
  description: string
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoriesRepositories: ICategoriesRepository){}
  
  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists =  await this.categoriesRepositories.findByName(name);

    if(categoryAlreadyExists) {
      throw new Error('Category Already Exists');
    }

    const newCategory = await this.categoriesRepositories.create({ name, description });
  }
}

export { CreateCategoryUseCase };