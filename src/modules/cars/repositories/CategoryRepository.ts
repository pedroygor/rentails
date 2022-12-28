import { getRepository, Repository } from "typeorm";
import { ICategoryCreateDTO, ICategoriesRepository } from "../../interfaces/ICategoriesRepository";
import { Category } from "../entities/Category";


class CategoryRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICategoryCreateDTO): Promise<void> {
    
    const category = this.repository.create({name, description});
    
    await this.repository.save(category);

    // return newCategory;
  }

   async getAll(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
  

  async findByName(name: string): Promise<Category | null> {
    const category = await this.repository.findOne({ name })

    if(!category) {
      return null;
    }

    return category;
  }
}

export { CategoryRepository };