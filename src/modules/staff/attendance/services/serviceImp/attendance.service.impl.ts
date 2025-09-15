//src/modules/staff/attendance/services/serviceImp/attendance.service.impl.ts

import {
  Injectable,
  Inject,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { CreateAttendanceDto } from '../../dtos/create-attendance.dto';
import { Attendance } from '../../entities/attendance.entity';
import { IAttendanceRepository } from '../../repositories/attendance.repository';
import { IAttendanceService } from '../attendance.service';
import { ATTENDANCE_REPOSITORY } from '../../constants/attendance.tokens';
import { UpdateAttendanceDto } from '../../dtos/update-attendance.dto';

@Injectable()
export class AttendanceServiceImpl implements IAttendanceService {
  constructor(
    @Inject(ATTENDANCE_REPOSITORY)
    private readonly repo: IAttendanceRepository,
  ) {}
  findAll(): Promise<Attendance[]> {
    return this.repo.findAll();
  }

  create(dto: CreateAttendanceDto): Promise<Attendance> {
    return this.repo.create(dto);
  }
  getLatestStatus(userId: number): Promise<Attendance | null> {
    return this.repo.findLatestByUserId(userId);
  }
  async clockIn(userId: number, location: string): Promise<Attendance> {
    const latestStatus = await this.getLatestStatus(userId);

    if (latestStatus && latestStatus.status === 'CLOCKED_IN') {
      throw new ConflictException('User is already clocked in.');
    }

    const newAttendance = {
      staff_id: userId,
      location,
      check_in_time: new Date(),
      status: 'CLOCKED_IN' as const,
    };
    return this.repo.create(newAttendance);
  }

  async clockOut(userId: number): Promise<Attendance> {
    const latestStatus = await this.getLatestStatus(userId);

    if (!latestStatus || latestStatus.status !== 'CLOCKED_IN') {
      throw new BadRequestException(
        'User is not clocked in or no active session found.',
      );
    }

    const updatedData = {
      check_out_time: new Date(),
      status: 'CLOCKED_OUT' as const,
    };
    return this.repo.update(latestStatus.id, updatedData);
  }

  findOne(id: number): Promise<Attendance> {
    return this.repo.findById(id);
  }
  update(id: number, dto: Partial<UpdateAttendanceDto>): Promise<Attendance> {
    return this.repo.update(id, dto);
  }
}
