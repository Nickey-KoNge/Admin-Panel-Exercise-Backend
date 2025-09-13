//src/modules/mode/dtos/create-mode.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateModeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}
