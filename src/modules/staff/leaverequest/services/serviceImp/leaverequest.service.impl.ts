//src/modules/staff/leaverequest/services/serviceImp/attendance.service.impl.ts

import { Injectable, Inject } from '@nestjs/common';
import { CreateLeaverequestDto } from '../../dtos/create-leaverequest.dto';
import { Leaverequest } from '../../entities/leaverequest.entity';
import { ILeaverequestRepository } from '../../repositories/leaverequest.repository';
import { ILeaverequestService } from '../leaverequest.service';
import { LEAVEREQUEST_REPOSITORY } from '../../constants/leaverequest.tokens';
import { UpdateLeaverequestDto } from '../../dtos/update-leaverequest.dto';

@Injectable()
export class LeaverequestServiceImpl implements ILeaverequestService {
  constructor(
    @Inject(LEAVEREQUEST_REPOSITORY)
    private readonly repo: ILeaverequestRepository,
  ) {}

  create(dto: CreateLeaverequestDto): Promise<Leaverequest> {
    return this.repo.create(dto);
  }
  findOne(id: number): Promise<Leaverequest> {
    return this.repo.findById(id);
  }
  update(
    id: number,
    dto: Partial<UpdateLeaverequestDto>,
  ): Promise<Leaverequest> {
    return this.repo.update(id, dto);
  }
}
