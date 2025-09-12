//src/modules/staff/attendance/services/attendance.service.ts (interface)

import { CreateAttendanceDto } from '../dtos/create-attendance.dto';
import { UpdateAttendanceDto } from '../dtos/update-attendance.dto';
import { Attendance } from '../entities/attendance.entity';

export interface IAttendanceService {
  create(dto: CreateAttendanceDto): Promise<Attendance>;
  findOne(id: number): Promise<Attendance>;
  update(id: number, dto: Partial<UpdateAttendanceDto>): Promise<Attendance>;
}
