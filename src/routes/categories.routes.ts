import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../modules/cars/model/Category';
import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory/index';
import { getAllCategoriesController } from '../modules/cars/useCases/getAllCategories';

const categoriesRoutes = Router();


categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
  return getAllCategoriesController.handle(req, res);
});

export { categoriesRoutes };