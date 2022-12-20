import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../model/Category';
import { CategoryRepository } from '../repositories/CategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();


categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).json();
});

categoriesRoutes.get('/', (req, res) => {
  const allCategories = categoriesRepository.getAll();

 return res.status(200).json(allCategories)
});

export { categoriesRoutes };