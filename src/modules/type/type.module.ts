//src/modules/type/type.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from '../type/entities/type.entity';
import { TypeController } from '../type/controllers/type.controller';
import { TypeServiceImpl } from '../type/services/serviceImp/type.service.impl';
import { TypeRepositoryImpl } from '../type/repositories/repositoriesImp/type.repository.impl';

import { TYPE_REPOSITORY, TYPE_SERVICE } from '../type/constants/type.tokens';
@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  controllers: [TypeController],
  providers: [
    { provide: TYPE_SERVICE, useClass: TypeServiceImpl },
    { provide: TYPE_REPOSITORY, useClass: TypeRepositoryImpl },
  ],
  exports: [TYPE_SERVICE, TYPE_REPOSITORY],
})
export class TypeModule {}
