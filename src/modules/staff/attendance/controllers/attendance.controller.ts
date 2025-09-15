// src/modules/staff/attendance/controllers/attendance.controller.ts

import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Patch, // 1. Import Patch
  UseGuards, // 2. Import UseGuards
  Req,
} from '@nestjs/common';
import { CreateAttendanceDto } from '../dtos/create-attendance.dto';
import { IAttendanceService } from '../services/attendance.service';
import { ATTENDANCE_SERVICE } from '../constants/attendance.tokens';
import { UpdateAttendanceDto } from '../dtos/update-attendance.dto';
import { JwtAuthGuard } from '../../../../auth/jwt-auth.gard';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: {
    userId: number;
    email: string;
    name: string;
    role_id: number;
    // Add any other properties from your JWT payload
  };
}
@Controller('attendance')
export class AttendanceController {
  constructor(
    @Inject(ATTENDANCE_SERVICE)
    private readonly service: IAttendanceService,
  ) {}
  @Get('status')
  @UseGuards(JwtAuthGuard)
  getStatus(@Req() req: RequestWithUser) {
    const userId = req.user.userId;
    return this.service.getLatestStatus(userId);
  }

  @Post('clock-in')
  @UseGuards(JwtAuthGuard)
  clockIn(@Req() req: RequestWithUser, @Body() body: { location: string }) {
    const userId = req.user.userId;
    return this.service.clockIn(userId, body.location);
  }

  @Patch('clock-out')
  @UseGuards(JwtAuthGuard)
  clockOut(@Req() req: RequestWithUser) {
    const userId = req.user.userId;
    return this.service.clockOut(userId);
  }

  @Post()
  create(@Body() dto: CreateAttendanceDto) {
    return this.service.create(dto);
  }
  @Get()
  findAll() {
    return this.service.findAll();
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
