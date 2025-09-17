import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';
// import { Attendance } from './modules/staff/attendance/entities/attendance.entity';
import { AttendanceModule } from './modules/staff/attendance.module';
import { LeaveRequestModule } from './modules/staff/leaverequest.module';
// import { Leaverequest } from './modules/staff/leaverequest/entities/leaverequest.entity';
// import { Role } from './modules/role/entities/role.entity';
import { RoleModule } from './modules/role/role.module';
// import { User } from './modules/user/entities/user.entity';
import { UserModule } from './modules/user/user.module';
// import { Mode } from './modules/mode/entities/mode.entity';
import { ModeModule } from './modules/mode/mode.module';
// import { Type } from './modules/type/entities/type.entity';
import { TypeModule } from './modules/type/type.module';
import { AuthModule } from './auth/auth.module';
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
        // entities: [Attendance, Leaverequest, Role, User, Mode, Type],
        autoLoadEntities: true,
        synchronize: false,
        migrations: ['dist/migrations/*{.ts,.js}'],
        migrationsRun: true,
      }),
    }),
    AttendanceModule,
    LeaveRequestModule,
    RoleModule,
    UserModule,
    ModeModule,
    TypeModule,
    AuthModule,
  ],
  // controllers: [AttendanceController],
  // providers: [AppService],
})
export class AppModule {}
