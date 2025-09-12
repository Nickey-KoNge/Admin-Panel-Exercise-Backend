//src/modules/staff/services/attendance.service.ts (interface)

import { CreateLeaverequestDto } from '../dtos/create-leaverequest.dto';
import { UpdateLeaverequestDto } from '../dtos/update-leaverequest.dto';
import { Leaverequest } from '../entities/leaverequest.entity';

export interface ILeaverequestService {
  findAll(): Promise<Leaverequest[]>;
  create(dto: CreateLeaverequestDto): Promise<Leaverequest>;
  findOne(id: number): Promise<Leaverequest>;
  update(
    id: number,
    dto: Partial<UpdateLeaverequestDto>,
  ): Promise<Leaverequest>;
  remove(id: number): Promise<void>;
}
