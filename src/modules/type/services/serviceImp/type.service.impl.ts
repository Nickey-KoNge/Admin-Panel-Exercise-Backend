//src/modules/type/services/serviceImp/type.service.impl.ts

import { Inject, Injectable } from '@nestjs/common';
import { CreateTypeDto } from '../../dtos/create-type.dto';
import { Type } from '../../entities/type.entity';
import { ITypeRepository } from '../../repositories/type.repository';
import { ITypeService } from '../type.service.impl';
import { TYPE_REPOSITORY } from '../../constants/type.tokens';

@Injectable()
export class TypeServiceImpl implements ITypeService {
  constructor(
    @Inject(TYPE_REPOSITORY)
    private readonly repo: ITypeRepository,
  ) {}
  create(dto: CreateTypeDto): Promise<Type> {
    return this.repo.create(dto);
  }
  findOne(id: number): Promise<Type> {
    return this.repo.findById(id);
  }
}
