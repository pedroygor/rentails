import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllSpecificationsUSeCase } from "./GetAllSpecificationsUseCase";

class GetAllSpecificationsController {

async  handle(req: Request, res: Response) {
  const getAllSpecificationsUseCase = container.resolve(GetAllSpecificationsUSeCase);
  
  const allSpecifications = getAllSpecificationsUseCase.execute();

    res.status(200).json(allSpecifications);
  }
}

export { GetAllSpecificationsController };