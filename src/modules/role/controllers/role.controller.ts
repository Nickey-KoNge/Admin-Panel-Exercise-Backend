// src/modules/role/controllers/attendance.controller.ts

import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from '../dtos/create-role.dto';
import { IRoleService } from '../services/role.service.impl';
import { ROLE_SERVICE } from '../constants/role.tokens';
// import { UpdateLeaverequestDto } from '../dtos/update-leaverequest.dto';

@Controller('role')
export class RoleController {
  constructor(
    @Inject(ROLE_SERVICE)
    private readonly service: IRoleService,
  ) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.service.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
}
