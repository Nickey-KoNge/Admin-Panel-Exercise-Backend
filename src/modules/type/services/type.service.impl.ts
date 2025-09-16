//src/modules/type/services/type.service.impl.ts
import { CreateTypeDto } from '../dtos/create-type.dto';
import { Type } from '../entities/type.entity';

export interface ITypeService {
  findAll(): Promise<Type[]>;
  create(dto: CreateTypeDto): Promise<Type>;
  findOne(id: number): Promise<Type>;
}
