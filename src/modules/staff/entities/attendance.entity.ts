//src/modules/staff/entities/attendance.entity.ts
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

  @Column({ type: 'timestamp', nullable: true })
  check_in_time: Date;

  @Column({ type: 'timestamp', nullable: true })
  check_out_time: Date;

  @Column({ type: 'varchar', length: 50, default: 'pending' })
  status: string;
}
