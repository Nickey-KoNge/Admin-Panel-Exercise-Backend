// src/modules/type/controllers/attendance.controller.ts

import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateTypeDto } from '../dtos/create-type.dto';
import { ITypeService } from '../services/type.service.impl';
import { TYPE_SERVICE } from '../constants/type.tokens';

@Controller('type')
export class TypeController {
  constructor(
    @Inject(TYPE_SERVICE)
    private readonly service: ITypeService,
  ) {}

  @Post()
  create(@Body() dto: CreateTypeDto) {
    return this.service.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
}
