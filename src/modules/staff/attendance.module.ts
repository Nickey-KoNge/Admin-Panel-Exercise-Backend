//src/modules/staff/attendance.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from './entities/attendance.entity';
import { AttendanceController } from './controllers/attendance.controller';
import { AttendanceServiceImpl } from './services/serviceImp/attendance.service.impl';
import { AttendanceRepositoryImpl } from './repositories/repositoriesImp/attendance.repository.impl';
// import { IAttendanceService } from './services/attendance.service';
// import { IAttendanceRepository } from './repositories/attendance.repository';
import {
  ATTENDANCE_SERVICE,
  ATTENDANCE_REPOSITORY,
} from './constants/attendance.tokens';
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
