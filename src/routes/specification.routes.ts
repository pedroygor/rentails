import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpeficationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRepository = new SpecificationRepository()

const specificationRoutes = Router();

specificationRoutes.post('/', (req, res) =>{
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(specificationsRepository);

  createSpecificationService.execute({ name, description });

  return res.status(201).send();

})

export { specificationRoutes };