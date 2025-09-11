// typeorm.config.ts
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Attendance } from './src/modules/staff/entities/attendance.entity';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Attendance],
  migrations: ['src/migrations/*{.ts,.js}'],
});
