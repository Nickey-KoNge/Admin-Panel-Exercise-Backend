//src/modules/staff/services/serviceImp/attendance.service.impl.ts

import { Injectable, Inject } from '@nestjs/common';
import { CreateAttendanceDto } from '../../dtos/create-attendance.dto';
import { Attendance } from '../../entities/attendance.entity';
import { IAttendanceRepository } from '../../repositories/attendance.repository';
import { IAttendanceService } from '../attendance.service';
import { ATTENDANCE_REPOSITORY } from '../../constants/attendance.tokens';

@Injectable()
export class AttendanceServiceImpl implements IAttendanceService {
  constructor(
    @Inject(ATTENDANCE_REPOSITORY)
    private readonly repo: IAttendanceRepository,
  ) {}

  create(dto: CreateAttendanceDto): Promise<Attendance> {
    return this.repo.create(dto);
  }
}
