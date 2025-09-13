//src/modules/user/repositories/repositoriesImp/user.repository.impl.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from '../user.repository';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryImpl implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.repo.find();
  }

  async create(user: Partial<User>): Promise<User> {
    return this.repo.save(this.repo.create(user));
  }
  async findById(id: number): Promise<User> {
    return this.repo.findOneBy({ id });
  }
  async update(id: number, user: Partial<User>): Promise<User> {
    await this.repo.update(id, user);
    return this.findById(id);
  }
  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
