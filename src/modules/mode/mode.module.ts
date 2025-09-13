//src/modules/mode/mode.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mode } from '../mode/entities/mode.entity';
import { ModeController } from '../mode/controllers/mode.controller';
import { ModeServiceImpl } from '../mode/services/serviceImp/mode.service.impl';
import { ModeRepositoryImpl } from '../mode/repositories/repositoriesImp/mode.repository.impl';

import { MODE_REPOSITORY, MODE_SERVICE } from '../mode/constants/mode.tokens';
@Module({
  imports: [TypeOrmModule.forFeature([Mode])],
  controllers: [ModeController],
  providers: [
    { provide: MODE_SERVICE, useClass: ModeServiceImpl },
    { provide: MODE_REPOSITORY, useClass: ModeRepositoryImpl },
  ],
  exports: [MODE_SERVICE, MODE_REPOSITORY],
})
export class ModeModule {}
