//src/modules/staff/repositories/leaverequest.repository.ts (Interface)

import { Leaverequest } from '../entities/leaverequest.entity';

export interface ILeaverequestRepository {
  create(leaverequest: Partial<Leaverequest>): Promise<Leaverequest>;
  findAll(): Promise<Leaverequest[]>;
  findByUserId(userId: number): Promise<Leaverequest[]>;
  findById(id: number): Promise<Leaverequest>;
  update(
    id: number,
    leaverequest: Partial<Leaverequest>,
  ): Promise<Leaverequest>;
  delete(id: number): Promise<void>;
}
