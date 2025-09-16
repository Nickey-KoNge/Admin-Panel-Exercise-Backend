// src/modules/mode/controllers/attendance.controller.ts

import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateModeDto } from '../dtos/create-mode.dto';
import { IModeService } from '../services/mode.service';
import { MODE_SERVICE } from '../constants/mode.tokens';

@Controller('mode')
export class ModeController {
  constructor(
    @Inject(MODE_SERVICE)
    private readonly service: IModeService,
  ) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Post()
  create(@Body() dto: CreateModeDto) {
    return this.service.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
}
