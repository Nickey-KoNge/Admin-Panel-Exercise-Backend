//src/modules/staff/attendance/repositories/attendance.repository.ts (Interface)

import { Attendance } from '../entities/attendance.entity';

export interface IAttendanceRepository {
  findLatestByUserId(userId: number): Promise<Attendance | null>;
  findAll(): Promise<Attendance[]>;
  create(attendance: Partial<Attendance>): Promise<Attendance>;
  findById(id: number): Promise<Attendance>;
  update(id: number, attendance: Partial<Attendance>): Promise<Attendance>;
}
