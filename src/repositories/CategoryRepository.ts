import { ICategoryCreateDTO, ICategoryRepositories } from "../interfaces/ICategoryRepositories";
import { Category } from "../model/Category";


class CategoryRepository implements ICategoryRepositories {
  private categories: Category[];
  
  constructor() {
    this.categories = [];
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