import { CategoryRepository } from "../../repositories/CategoryRepository";
import { GetAllCategoriesController } from "./GetAllCategoriesController";
import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

const categoryRepository = CategoryRepository.getInstance();
const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository);
const getAllCategoriesController = new GetAllCategoriesController(getAllCategoriesUseCase);

export { getAllCategoriesController };
