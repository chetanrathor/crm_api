import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class GetAllHumanResources {

    @ApiProperty({example:'0'})
    @IsString()
    limit: string

    @ApiProperty({example:'0'})
    @IsString()
    offset: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    search: string

    @ApiProperty({example:'DESC'})
    @IsString()
    order: string


}