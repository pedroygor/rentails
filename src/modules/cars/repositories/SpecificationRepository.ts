import { getRepository, Repository } from "typeorm";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../../interfaces/ISpecificationsRepository";
import { Specification } from "../entities/Specification";

class SpecificationRepository implements ISpecificationRepository{
  private repository: Repository<Specification>;

  

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({name, description});

    await this.repository.save(specification);
  }

  async getAll(): Promise<Specification[]> {
    const specifications = await this.repository.find();
    return specifications;
  }

  async findByName(name: string): Promise<Specification | undefined> {
    const specification = await this.repository.findOne({ name });
    return specification;
  }

}

export { SpecificationRepository };