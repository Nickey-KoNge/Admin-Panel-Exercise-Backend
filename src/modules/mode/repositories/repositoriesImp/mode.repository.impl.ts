//src/modules/mode/repositories/repositoriesImp/mode.repository.impl.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IModeRepository } from '../mode.repository';
import { Mode } from '../../entities/mode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModeRepositoryImpl implements IModeRepository {
  constructor(
    @InjectRepository(Mode)
    private readonly repo: Repository<Mode>,
  ) {}

  async findAll(): Promise<Mode[]> {
    return this.repo.find();
  }
  async create(mode: Partial<Mode>): Promise<Mode> {
    return this.repo.save(this.repo.create(mode));
  }
  async findById(id: number): Promise<Mode> {
    return this.repo.findOneBy({ id });
  }
}
