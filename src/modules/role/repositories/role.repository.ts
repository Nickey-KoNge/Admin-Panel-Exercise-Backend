//src/modules/role/repositories/role.repository.ts
import { Role } from '../entities/role.entity';

export interface IRoleRepository {
  create(role: Partial<Role>): Promise<Role>;
  findById(id: number): Promise<Role>;
}
