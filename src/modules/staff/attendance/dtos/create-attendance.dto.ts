// //src/modules/staff/dtos/create-attendance.dto.ts
// import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

// export class CreateAttendanceDto {
//   @IsNotEmpty()
//   @IsString()
//   location: string;

//   @IsNumber()
//   @IsNotEmpty()
//   staff_id: number;

//   @IsDate()
//   @IsNotEmpty()
//   check_in_time: Date;

//   @IsDate()
//   @IsNotEmpty()
//   check_out_time: Date;

//   @IsString()
//   @IsNotEmpty()
//   status: string;
// }
// src/modules/staff/attendance/dtos/create-attendance.dto.ts

import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAttendanceDto {
  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNumber()
  @IsNotEmpty()
  staff_id: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  check_in_time: Date;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  check_out_time: Date;

  @IsString()
  @IsNotEmpty()
  status: string;
}
