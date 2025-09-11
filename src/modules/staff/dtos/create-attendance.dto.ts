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
// src/modules/staff/dtos/create-attendance.dto.ts

import { Type } from 'class-transformer'; // 1. Import Type
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAttendanceDto {
  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNumber()
  @IsNotEmpty()
  staff_id: number;

  @IsDate()
  @Type(() => Date) // 2. Add this decorator
  @IsNotEmpty()
  check_in_time: Date;

  @IsDate()
  @Type(() => Date) // 3. And add it here too
  @IsNotEmpty()
  check_out_time: Date;

  @IsString()
  @IsNotEmpty()
  status: string;
}
