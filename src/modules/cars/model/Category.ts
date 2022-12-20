import { v4 as uuidV4 } from 'uuid';

class Category {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;

  constructor( name: string, description: string, createdAt: Date, id?: string) {
    if(!this.id) {
      this.id = uuidV4();
    }
    this.id = uuidV4();
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
  }
 
}

export { Category };