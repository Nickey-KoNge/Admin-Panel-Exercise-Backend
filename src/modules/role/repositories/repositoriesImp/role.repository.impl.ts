//src/modules/role/repositories/repositoriesImp/role.repository.impl.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IRoleRepository } from '../role.repository';
import { Role } from '../../entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleRepositoryImpl implements IRoleRepository {
  constructor(
    @InjectRepository(Role)
    private readonly repo: Repository<Role>,
  ) {}
  async findAll(): Promise<Role[]> {
    return this.repo.find();
  }
  async create(role: Partial<Role>): Promise<Role> {
    return this.repo.save(this.repo.create(role));
  }
  async findById(id: number): Promise<Role> {
    return this.repo.findOneBy({ id });
  }
}
