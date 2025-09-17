//src/modules/staff/leaverequest /repositories/repositoriesImp/leaverequest.repository.impl.ts

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
  async findAll(): Promise<Leaverequest[]> {
    return this.repo.find({ relations: ['type'] });
  }

  async findByUserId(userId: number): Promise<Leaverequest[]> {
    return this.repo.find({
      where: { staff_id: userId },
      relations: ['type'],
    });
  }
  async create(leaverequest: Partial<Leaverequest>): Promise<Leaverequest> {
    return this.repo.save(this.repo.create(leaverequest));
  }
  async findById(id: number): Promise<Leaverequest> {
    return this.repo.findOneBy({ id });
  }
  async update(
    id: number,
    leaverequest: Partial<Leaverequest>,
  ): Promise<Leaverequest> {
    await this.repo.update(id, leaverequest);
    return this.findById(id);
  }
  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
