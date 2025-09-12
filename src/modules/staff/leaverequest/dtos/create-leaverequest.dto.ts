// src/modules/staff/leaverequest/dtos/create-leaverequest.dto.ts

import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLeaverequestDto {
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
