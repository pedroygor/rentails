import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

class GetAllCategoriesController {
  
  async handle(req: Request, res: Response): Promise<Response> {
    const getAllCategoriesUseCase = container.resolve(GetAllCategoriesUseCase);

    const allCategories = await getAllCategoriesUseCase.execute();

    return res.status(200).json(allCategories)
  }
}

export { GetAllCategoriesController };