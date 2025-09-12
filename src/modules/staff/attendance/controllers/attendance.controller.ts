// src/modules/staff/attendance/controllers/attendance.controller.ts

import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAttendanceDto } from '../dtos/create-attendance.dto';
import { IAttendanceService } from '../services/attendance.service';
import { ATTENDANCE_SERVICE } from '../constants/attendance.tokens';
import { UpdateAttendanceDto } from '../dtos/update-attendance.dto';

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

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateAttendanceDto) {
    return this.service.update(id, dto);
  }
}
