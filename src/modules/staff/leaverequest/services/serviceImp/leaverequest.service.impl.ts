//src/modules/staff/leaverequest/services/serviceImp/leaverequest.service.impl.ts

import { Injectable, Inject } from '@nestjs/common';
import { CreateLeaverequestDto } from '../../dtos/create-leaverequest.dto';
import { Leaverequest } from '../../entities/leaverequest.entity';
import { ILeaverequestRepository } from '../../repositories/leaverequest.repository';
import { ILeaverequestService } from '../leaverequest.service';
import { LEAVEREQUEST_REPOSITORY } from '../../constants/leaverequest.tokens';
import { UpdateLeaverequestDto } from '../../dtos/update-leaverequest.dto';
import { LeaveType } from '../../entities/leave-type.entity';

@Injectable()
export class LeaverequestServiceImpl implements ILeaverequestService {
  constructor(
    @Inject(LEAVEREQUEST_REPOSITORY)
    private readonly repo: ILeaverequestRepository,
  ) {}
  async findAll(user: {
    userId: number;
    role: number;
  }): Promise<Leaverequest[]> {
    const isAdmin = user.role === 1;

    if (isAdmin) {
      return this.repo.findAll();
    } else {
      return this.repo.findByUserId(user.userId);
    }
  }
  create(dto: CreateLeaverequestDto): Promise<Leaverequest> {
    const leaveRequestData = {
      ...dto,
      type: { id: dto.type } as LeaveType,
    };

    return this.repo.create(leaveRequestData);
  }
  findOne(id: number): Promise<Leaverequest> {
    return this.repo.findById(id);
  }
  update(
    id: number,
    dto: Partial<UpdateLeaverequestDto>,
  ): Promise<Leaverequest> {
    const { type, ...rest } = dto;
    const updateData: Partial<Leaverequest> = {
      ...rest,
    };
    if (type) {
      updateData.type = { id: type } as LeaveType;
    }

    return this.repo.update(id, updateData);
  }
  remove(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
