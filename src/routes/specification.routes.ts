import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpeficationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";


const specificationRoutes = Router();

specificationRoutes.post('/', (req, res) =>{
  return createSpecificationController.handle(req, res);
})

export { specificationRoutes };