import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class UpdateAttendanceDto {
  @IsNotEmpty()
  @IsString()
  location: string;

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
