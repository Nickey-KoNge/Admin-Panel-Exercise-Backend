//src/modules/mode/entities/mode.entity.ts
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('mode')
export class Mode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  @IsNotEmpty()
  name: string;

  @Column({ type: 'varchar', length: 50, default: 'Active' })
  @IsNotEmpty()
  status: string;
}
