//src/modules/type/repositories/type.repository.ts
import { Type } from '../entities/type.entity';

export interface ITypeRepository {
  findAll(): Promise<Type[]>;
  create(type: Partial<Type>): Promise<Type>;
  findById(id: number): Promise<Type>;
}
