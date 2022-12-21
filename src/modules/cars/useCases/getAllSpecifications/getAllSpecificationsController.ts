import { Request, Response } from "express";
import { GetAllSpecificationsUSeCase } from "./GetAllSpecificationsUseCase";

class GetAllSpecificationsController {
  constructor(private getAllSpecificationsUseCase: GetAllSpecificationsUSeCase){}

  handle(req: Request, res: Response) {
    const allSpecifications = this.getAllSpecificationsUseCase.execute();

    res.status(200).json(allSpecifications);
  }
}

export { GetAllSpecificationsController };