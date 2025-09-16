//src/modules/role/services/serviceImp/role.service.impl.ts

import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../../dtos/create-role.dto';
import { Role } from '../../entities/role.entity';
import { IRoleRepository } from '../../repositories/role.repository';
import { IRoleService } from '../role.service.impl';
import { ROLE_REPOSITORY } from '../../constants/role.tokens';

@Injectable()
export class RoleServiceImpl implements IRoleService {
  constructor(
    @Inject(ROLE_REPOSITORY)
    private readonly repo: IRoleRepository,
  ) {}
  findAll(): Promise<Role[]> {
    return this.repo.findAll();
  }
  create(dto: CreateRoleDto): Promise<Role> {
    return this.repo.create(dto);
  }
  findOne(id: number): Promise<Role> {
    return this.repo.findById(id);
  }
}
