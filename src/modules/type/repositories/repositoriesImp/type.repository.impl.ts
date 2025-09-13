//src/modules/type/repositories/repositoriesImp/type.repository.impl.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITypeRepository } from '../type.repository';
import { Type } from '../../entities/type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeRepositoryImpl implements ITypeRepository {
  constructor(
    @InjectRepository(Type)
    private readonly repo: Repository<Type>,
  ) {}
  async create(type: Partial<Type>): Promise<Type> {
    return this.repo.save(this.repo.create(type));
  }
  async findById(id: number): Promise<Type> {
    return this.repo.findOneBy({ id });
  }
}
