import { Request, Response } from "express";
import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

class GetAllCategoriesController {
  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase){}
  handle(req: Request, res: Response): Response {
    const allCategories = this.getAllCategoriesUseCase.execute();

    return res.status(200).json(allCategories)
  }
}

export { GetAllCategoriesController };