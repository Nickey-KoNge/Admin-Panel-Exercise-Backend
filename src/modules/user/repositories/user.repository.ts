//src/modules/user/repositories/user.repository.ts (Interface)

import { User } from '../entities/user.entity';

export interface IUserRepository {
  create(user: Partial<User>): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User>;
  update(id: number, user: Partial<User>): Promise<User>;
  delete(id: number): Promise<void>;
}
