import { IsDate, IsOptional, IsString } from "class-validator";

// Simple DTO for clocking in
export class AttendanceDto {
    @IsDate()
    @IsOptional()
    arrivalTime?: Date;

    @IsDate()
    @IsOptional()
    exitTime?: Date;

}