import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumberString, IsOptional, IsString } from "class-validator";

export class GetAllHumanResources {

    @ApiProperty({example:'0'})
    @IsString()
    @IsNumberString()
    limit: number

    @ApiProperty({example:'0'})
    @IsNumberString()
    @IsString()
    offset: number

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    search: string

    @ApiProperty({example:'DESC'})
    @IsString()
    order: string


}