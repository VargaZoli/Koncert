import {  IsBoolean, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateKoncertekDto {
  @IsString()
  @IsNotEmpty()
  BandName: string


  
  @IsDateString()
  @IsNotEmpty()
  StartTime:Date

  @IsNotEmpty()
  Length:number

  @IsBoolean()
  @IsNotEmpty()
  Postponed:boolean
}

