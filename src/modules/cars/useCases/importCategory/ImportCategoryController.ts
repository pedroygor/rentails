import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    if(!file){
      return res.status(400).send();
    }
    
    await importCategoryUseCase.execute(file);
    
    return res.send();
  }
}

export { ImportCategoryController };