import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';
import { Attendance } from './modules/staff/attendance/entities/attendance.entity';
import { AttendanceModule } from './modules/staff/attendance.module';
import { LeaveRequestModule } from './modules/staff/leaverequest.module';
import { Leaverequest } from './modules/staff/leaverequest/entities/leaverequest.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('database.host'),
        port: config.get<number>('database.port'),
        username: config.get<string>('database.username'),
        password: config.get<string>('database.password'),
        database: config.get<string>('database.database'),
        entities: [Attendance, Leaverequest],
        synchronize: false,
        migrations: ['dist/migrations/*{.ts,.js}'],
        migrationsRun: true,
      }),
    }),
    AttendanceModule,
    LeaveRequestModule,
  ],
  // controllers: [AttendanceController],
  // providers: [AppService],
})
export class AppModule {}
