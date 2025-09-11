//src/modules/staff/services/attendance.service.ts (interface)

import { CreateAttendanceDto } from '../dtos/create-attendance.dto';
import { Attendance } from '../entities/attendance.entity';

export interface IAttendanceService {
  create(dto: CreateAttendanceDto): Promise<Attendance>;
}
