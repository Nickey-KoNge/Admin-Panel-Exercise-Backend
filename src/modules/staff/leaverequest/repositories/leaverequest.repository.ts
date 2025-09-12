//src/modules/staff/repositories/attendance.repository.ts (Interface)

import { Leaverequest } from '../entities/leaverequest.entity';

export interface ILeaverequestRepository {
  create(leaverequest: Partial<Leaverequest>): Promise<Leaverequest>;
  findById(id: number): Promise<Leaverequest>;
  update(
    id: number,
    leaverequest: Partial<Leaverequest>,
  ): Promise<Leaverequest>;
}
