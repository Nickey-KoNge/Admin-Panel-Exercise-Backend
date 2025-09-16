//src/modules/mode/services/mode.service.impl.ts
import { CreateModeDto } from '../dtos/create-mode.dto';
import { Mode } from '../entities/mode.entity';

export interface IModeService {
  findAll(): Promise<Mode[]>;
  create(dto: CreateModeDto): Promise<Mode>;
  findOne(id: number): Promise<Mode>;
}
