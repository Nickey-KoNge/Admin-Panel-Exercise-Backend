// src/modules/products/controllers/attendance.controller.ts

import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateLeaverequestDto } from '../dtos/create-leaverequest.dto';
import { ILeaverequestService } from '../services/leaverequest.service';
import { LEAVEREQUEST_SERVICE } from '../constants/leaverequest.tokens';
import { UpdateLeaverequestDto } from '../dtos/update-leaverequest.dto';

@Controller('leaverequest')
export class LeaverequestController {
  constructor(
    @Inject(LEAVEREQUEST_SERVICE)
    private readonly service: ILeaverequestService,
  ) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateLeaverequestDto) {
    return this.service.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateLeaverequestDto) {
    return this.service.update(id, dto);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
