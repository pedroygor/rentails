import { SpecificationRepository } from "../../repositories/SpeficationRepository";
import { GetAllSpecificationsController } from "./getAllSpecificationsController";
import { GetAllSpecificationsUSeCase } from "./GetAllSpecificationsUseCase";

const specificationsRepository = SpecificationRepository.getInstance();
const getAllSpecificationsUseCase = new GetAllSpecificationsUSeCase(specificationsRepository);
const getAllSpecificationController = new GetAllSpecificationsController(
  getAllSpecificationsUseCase
);

export { getAllSpecificationController };