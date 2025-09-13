//src/modules/user/entities/user.entity.ts
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  @IsNotEmpty()
  name: string;

  @Column({ type: 'varchar', length: 100 })
  @IsNotEmpty()
  email: string;

  @Column({ type: 'int' })
  @IsNotEmpty()
  role_id: number;

  @Column({ type: 'varchar', length: 255 })
  @IsNotEmpty()
  password: string;

  @Column({ type: 'varchar', length: 50, default: 'Active' })
  @IsNotEmpty()
  status: string;
}
