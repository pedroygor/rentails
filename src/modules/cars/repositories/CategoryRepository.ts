import { ICategoryCreateDTO, ICategoriesRepository } from "../../interfaces/ICategoriesRepository";
import { Category } from "../model/Category";


class CategoryRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoryRepository;
  
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if(!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }

    return CategoryRepository.INSTANCE;
  }

  create({ name, description }: ICategoryCreateDTO): Category {
    const createdAt = new Date();
    const category = new Category(name, description, createdAt);
    this.categories.push(category)

    return category;
  }

  getAll(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | null {
    const category = this.categories.find(category => category.name === name);

    if(!category) {
      return null;
    }

    return category;
  }
}

export { CategoryRepository };