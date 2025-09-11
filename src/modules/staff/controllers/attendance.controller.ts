// src/modules/products/controllers/attendance.controller.ts

import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateAttendanceDto } from '../dtos/create-attendance.dto';
import { IAttendanceService } from '../services/attendance.service';
import { ATTENDANCE_SERVICE } from '../constants/attendance.tokens';

@Controller('attendance')
export class AttendanceController {
  constructor(
    @Inject(ATTENDANCE_SERVICE)
    private readonly service: IAttendanceService,
  ) {}

  @Post()
  create(@Body() dto: CreateAttendanceDto) {
    return this.service.create(dto);
  }
}
