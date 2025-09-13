//src/modules/user/controllers/user.controller.ts
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
import { CreateUserDto } from '../dtos/create-user.dto';
import { IUserService } from '../services/user.service';
import { USER_SERVICE } from '../constants/user.tokens';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly service: IUserService,
  ) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.service.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateUserDto) {
    return this.service.update(id, dto);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
