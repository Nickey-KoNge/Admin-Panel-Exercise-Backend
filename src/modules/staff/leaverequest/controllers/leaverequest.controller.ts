import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CreateLeaverequestDto } from '../dtos/create-leaverequest.dto';
import { ILeaverequestService } from '../services/leaverequest.service';
import { LEAVEREQUEST_SERVICE } from '../constants/leaverequest.tokens';
import { UpdateLeaverequestDto } from '../dtos/update-leaverequest.dto';
import { JwtAuthGuard } from '../../../../auth/jwt-auth.gard'; // Adjust path
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: { userId: number; name: string; role: number };
}

@Controller('leaverequest')
@UseGuards(JwtAuthGuard)
export class LeaverequestController {
  constructor(
    @Inject(LEAVEREQUEST_SERVICE)
    private readonly service: ILeaverequestService,
  ) {}

  @Get()
  findAll(@Req() req: RequestWithUser) {
    return this.service.findAll(req.user);
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
