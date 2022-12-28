import { container } from "tsyringe";

import { ICategoriesRepository } from './../../modules/interfaces/ICategoriesRepository';
import { CategoryRepository } from '../../modules/cars/repositories/CategoryRepository';
import { SpecificationRepository } from "../../modules/cars/repositories/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/interfaces/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  'CategoryRepository',
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository
);