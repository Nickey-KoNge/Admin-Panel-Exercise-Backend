//src/modules/staff/services/leaverequest.service.ts (interface)

import { CreateLeaverequestDto } from '../dtos/create-leaverequest.dto';
import { UpdateLeaverequestDto } from '../dtos/update-leaverequest.dto';
import { Leaverequest } from '../entities/leaverequest.entity';

type AuthenticatedUser = {
  userId: number;
  name: string;
  role: number;
};
export interface ILeaverequestService {
  findAll(user: AuthenticatedUser): Promise<Leaverequest[]>;
  create(dto: CreateLeaverequestDto): Promise<Leaverequest>;
  findOne(id: number): Promise<Leaverequest | null>;
  update(
    id: number,
    dto: Partial<UpdateLeaverequestDto>,
  ): Promise<Leaverequest>;
  remove(id: number): Promise<void>;
}
