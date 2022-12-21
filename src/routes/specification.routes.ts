import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpeficationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { getAllSpecificationController } from "../modules/cars/useCases/getAllSpecifications";


const specificationRoutes = Router();

specificationRoutes.post('/', (req, res) =>{
  return createSpecificationController.handle(req, res);
});

specificationRoutes.get('/', (req, res) => {
  return getAllSpecificationController.handle(req, res);
});

export { specificationRoutes };