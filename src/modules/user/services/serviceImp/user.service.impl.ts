//src/modules/user/services/serviceImp/attendance.service.impl.ts

import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { User } from '../../entities/user.entity';
import { IUserRepository } from '../../repositories/user.repository';
import { IUserService } from '../user.service';
import { USER_REPOSITORY } from '../../constants/user.tokens';
import { UpdateUserDto } from '../../dtos/update-user.dto';

@Injectable()
export class UserServiceImpl implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly repo: IUserRepository,
  ) {}
  findAll(): Promise<User[]> {
    return this.repo.findAll();
  }

  create(dto: CreateUserDto): Promise<User> {
    return this.repo.create(dto);
  }
  findOne(id: number): Promise<User> {
    return this.repo.findById(id);
  }
  update(id: number, dto: Partial<UpdateUserDto>): Promise<User> {
    return this.repo.update(id, dto);
  }
  remove(id: number): Promise<void> {
    return this.repo.delete(id);
  }
  findByEmail(email: string): Promise<User | null> {
    return this.repo.findByEmail(email);
  }
}
