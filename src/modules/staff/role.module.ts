//src/modules/staff/role.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../role/entities/role.entity';
import { RoleController } from '../role/controllers/role.controller';
import { RoleServiceImpl } from '../role/services/serviceImp/role.service.impl';
import { RoleRepositoryImpl } from '../role/repositories/repositoriesImp/role.repository.impl';

import { ROLE_REPOSITORY, ROLE_SERVICE } from '../role/constants/role.tokens';
@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [
    { provide: ROLE_SERVICE, useClass: RoleServiceImpl },
    { provide: ROLE_REPOSITORY, useClass: RoleRepositoryImpl },
  ],
  exports: [ROLE_SERVICE, ROLE_REPOSITORY],
})
export class RoleModule {}
