//src/modules/mode/services/serviceImp/mode.service.impl.ts

import { Inject, Injectable } from '@nestjs/common';
import { CreateModeDto } from '../../dtos/create-mode.dto';
import { Mode } from '../../entities/mode.entity';
import { IModeRepository } from '../../repositories/mode.repository';
import { IModeService } from '../mode.service';
import { MODE_REPOSITORY } from '../../constants/mode.tokens';

@Injectable()
export class ModeServiceImpl implements IModeService {
  constructor(
    @Inject(MODE_REPOSITORY)
    private readonly repo: IModeRepository,
  ) {}
  findAll(): Promise<Mode[]> {
    return this.repo.findAll();
  }
  create(dto: CreateModeDto): Promise<Mode> {
    return this.repo.create(dto);
  }
  findOne(id: number): Promise<Mode> {
    return this.repo.findById(id);
  }
}
