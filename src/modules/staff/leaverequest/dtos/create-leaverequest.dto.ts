// src/modules/staff/leaverequest/dtos/create-leaverequest.dto.ts

import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

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

  @IsArray()
  @IsDateString({}, { each: true })
  @IsNotEmpty()
  requestDate: string[];

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  submittedon: Date;

  @IsString()
  @IsNotEmpty()
  status: string;
}
