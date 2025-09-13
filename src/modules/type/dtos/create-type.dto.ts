//src/modules/type/dtos/create-type.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTypeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}
