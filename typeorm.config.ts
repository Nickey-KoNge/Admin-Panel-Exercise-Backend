// typeorm.config.ts
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Attendance } from './src/modules/staff/attendance/entities/attendance.entity';
import { Leaverequest } from './src/modules/staff/leaverequest/entities/leaverequest.entity';
dotenv.config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Attendance, Leaverequest],
  migrations: ['src/migrations/*{.ts,.js}'],
});
