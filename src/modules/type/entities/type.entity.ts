//src/modules/type/entities/role.entity.ts
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('type')
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  @IsNotEmpty()
  name: string;

  @Column({ type: 'varchar', length: 50, default: 'Active' })
  @IsNotEmpty()
  status: string;
}
