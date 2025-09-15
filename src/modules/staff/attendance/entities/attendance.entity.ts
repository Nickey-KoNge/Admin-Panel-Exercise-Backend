//src/modules/staff/attendance/entities/attendance.entity.ts
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('attendance')
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  @IsNotEmpty()
  location: string;

  @Column({ type: 'int' })
  @IsNotEmpty()
  staff_id: number;

  @Column({
    type: 'timestamp with time zone',
    nullable: true,
    name: 'check_in_time',
  })
  check_in_time: Date;

  @Column({
    type: 'timestamp with time zone',
    nullable: true,
    name: 'check_out_time',
  })
  check_out_time: Date;

  @Column({ type: 'varchar', length: 50, default: 'pending' })
  status: string;
}
