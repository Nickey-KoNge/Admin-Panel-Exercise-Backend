//src/modules/staff/repositories/repositoriesImp/attendance.repository.impl.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IAttendanceRepository } from '../attendance.repository';
import { Attendance } from '../../entities/attendance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AttendanceRepositoryImpl implements IAttendanceRepository {
  constructor(
    @InjectRepository(Attendance)
    private readonly repo: Repository<Attendance>,
  ) {}

  async create(attendance: Partial<Attendance>): Promise<Attendance> {
    return this.repo.save(this.repo.create(attendance));
  }
}
