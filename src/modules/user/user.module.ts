//src/modules/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
import { UserServiceImpl } from './services/serviceImp/user.service.impl';
import { UserRepositoryImpl } from './repositories/repositoriesImp/user.repository.impl';

import { USER_REPOSITORY, USER_SERVICE } from './constants/user.tokens';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    { provide: USER_SERVICE, useClass: UserServiceImpl },
    { provide: USER_REPOSITORY, useClass: UserRepositoryImpl },
  ],
  exports: [USER_SERVICE, USER_REPOSITORY],
})
export class UserModule {}
