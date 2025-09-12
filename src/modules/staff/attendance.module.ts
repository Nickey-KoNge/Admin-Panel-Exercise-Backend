//src/modules/staff/attendance.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from './attendance/entities/attendance.entity';
import { AttendanceController } from './attendance/controllers/attendance.controller';
import { AttendanceServiceImpl } from './attendance/services/serviceImp/attendance.service.impl';
import { AttendanceRepositoryImpl } from './attendance/repositories/repositoriesImp/attendance.repository.impl';
// import { IAttendanceService } from './services/attendance.service';
// import { IAttendanceRepository } from './repositories/attendance.repository';
import {
  ATTENDANCE_SERVICE,
  ATTENDANCE_REPOSITORY,
} from './attendance/constants/attendance.tokens';
@Module({
  imports: [TypeOrmModule.forFeature([Attendance])],
  controllers: [AttendanceController],
  providers: [
    { provide: ATTENDANCE_SERVICE, useClass: AttendanceServiceImpl },
    { provide: ATTENDANCE_REPOSITORY, useClass: AttendanceRepositoryImpl },
  ],
  exports: [ATTENDANCE_SERVICE, ATTENDANCE_REPOSITORY],
})
export class AttendanceModule {}
