//src/modules/staff/leaverequest/entities/attendance.entity.ts
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('leaverequest')
export class Leaverequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  @IsNotEmpty()
  mode: number;

  @Column({ type: 'int' })
  @IsNotEmpty()
  type: number;

  @Column({ type: 'varchar', length: 255 })
  @IsNotEmpty()
  reason: string;

  @Column({ type: 'int' })
  @IsNotEmpty()
  staff_id: number;

  @Column({ type: 'int' })
  @IsNotEmpty()
  noofday: number;

  @Column({ type: 'timestamp', nullable: true })
  requestDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  submittedon: Date;

  @Column({ type: 'varchar', length: 50, default: 'Pending' })
  status: string;
}
