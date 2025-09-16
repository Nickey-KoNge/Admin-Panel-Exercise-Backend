//src/modules/role/services/role.service.impl.ts
import { CreateRoleDto } from '../dtos/create-role.dto';
import { Role } from '../entities/role.entity';

export interface IRoleService {
  findAll(): Promise<Role[]>;
  create(dto: CreateRoleDto): Promise<Role>;
  findOne(id: number): Promise<Role>;
}
