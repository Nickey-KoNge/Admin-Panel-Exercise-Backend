//src/modules/user/services/user.service.ts (interface)

import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../entities/user.entity';

export interface IUserService {
  findAll(): Promise<User[]>;
  create(dto: CreateUserDto): Promise<User>;
  findOne(id: number): Promise<User>;
  update(id: number, dto: Partial<UpdateUserDto>): Promise<User>;
  remove(id: number): Promise<void>;
}
