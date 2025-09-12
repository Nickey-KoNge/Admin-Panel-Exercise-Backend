import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateLeaverequestDto {
  @IsNumber()
  @IsNotEmpty()
  mode: number;

  @IsNumber()
  @IsNotEmpty()
  type: number;

  @IsNotEmpty()
  @IsString()
  reason: string;

  @IsNumber()
  @IsNotEmpty()
  staff_id: number;

  @IsNumber()
  @IsNotEmpty()
  noofday: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  requestDate: Date;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  submittedon: Date;

  @IsString()
  @IsNotEmpty()
  status: string;
}
