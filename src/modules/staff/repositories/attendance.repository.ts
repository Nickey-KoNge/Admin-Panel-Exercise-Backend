//src/modules/staff/repositories/attendance.repository.ts (Interface)

import { Attendance } from '../entities/attendance.entity';

export interface IAttendanceRepository {
  create(attendance: Partial<Attendance>): Promise<Attendance>;
}
