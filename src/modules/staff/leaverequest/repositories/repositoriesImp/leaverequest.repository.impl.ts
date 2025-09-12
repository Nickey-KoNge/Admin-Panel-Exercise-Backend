//src/modules/staff/leaverequest /repositories/repositoriesImp/attendance.repository.impl.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILeaverequestRepository } from '../leaverequest.repository';
import { Leaverequest } from '../../entities/leaverequest.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LeaverequestRepositoryImpl implements ILeaverequestRepository {
  constructor(
    @InjectRepository(Leaverequest)
    private readonly repo: Repository<Leaverequest>,
  ) {}

  async create(attendance: Partial<Leaverequest>): Promise<Leaverequest> {
    return this.repo.save(this.repo.create(attendance));
  }
  async findById(id: number): Promise<Leaverequest> {
    return this.repo.findOneBy({ id });
  }
  async update(
    id: number,
    attendance: Partial<Leaverequest>,
  ): Promise<Leaverequest> {
    await this.repo.update(id, attendance);
    return this.findById(id);
  }
}
