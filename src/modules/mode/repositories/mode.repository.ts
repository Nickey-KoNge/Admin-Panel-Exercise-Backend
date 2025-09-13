//src/modules/mode/repositories/mode.repository.ts
import { Mode } from '../entities/mode.entity';

export interface IModeRepository {
  create(mode: Partial<Mode>): Promise<Mode>;
  findById(id: number): Promise<Mode>;
}
