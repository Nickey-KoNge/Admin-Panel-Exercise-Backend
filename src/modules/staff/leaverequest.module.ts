//src/modules/staff/leaverequest/leaverequest.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leaverequest } from './leaverequest/entities/leaverequest.entity';
import { LeaverequestController } from './leaverequest/controllers/leaverequest.controller';
import { LeaverequestServiceImpl } from './leaverequest/services/serviceImp/leaverequest.service.impl';
import { LeaverequestRepositoryImpl } from './leaverequest/repositories/repositoriesImp/leaverequest.repository.impl';

import {
  LEAVEREQUEST_REPOSITORY,
  LEAVEREQUEST_SERVICE,
} from './leaverequest/constants/leaverequest.tokens';
import { LeaveType } from './leaverequest/entities/leave-type.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Leaverequest, LeaveType])],
  controllers: [LeaverequestController],
  providers: [
    { provide: LEAVEREQUEST_SERVICE, useClass: LeaverequestServiceImpl },
    { provide: LEAVEREQUEST_REPOSITORY, useClass: LeaverequestRepositoryImpl },
  ],
  exports: [LEAVEREQUEST_SERVICE, LEAVEREQUEST_REPOSITORY],
})
export class LeaveRequestModule {}
