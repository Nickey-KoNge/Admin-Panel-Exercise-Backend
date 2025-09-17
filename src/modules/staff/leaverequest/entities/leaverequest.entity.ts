//src/modules/staff/leaverequest/entities/leaverequest.entity.ts
import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { LeaveType } from './leave-type.entity';
@Entity('leaverequest')
export class Leaverequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  @IsNotEmpty()
  mode: number;

  @ManyToOne(() => LeaveType)
  @JoinColumn({ name: 'type' })
  type: LeaveType;
  // @Column({ type: 'int' })
  // @IsNotEmpty()
  // type: number;

  @Column({ type: 'varchar', length: 255 })
  @IsNotEmpty()
  reason: string;

  @Column({ type: 'int' })
  @IsNotEmpty()
  staff_id: number;

  @Column({ type: 'int' })
  @IsNotEmpty()
  noofday: number;

  @Column({
    type: 'jsonb',
    nullable: true,
    name: 'requestDate',
  })
  requestDate: string[];

  @Column({ type: 'timestamp', nullable: true })
  submittedon: Date;

  @Column({ type: 'varchar', length: 50, default: 'Pending' })
  status: string;
}
