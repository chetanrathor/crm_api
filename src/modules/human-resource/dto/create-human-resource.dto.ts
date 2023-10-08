import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";
import { random } from "lodash";

export class CreateHumanResourceDto {

    @ApiPropertyOptional({enumName:'test'})
    @IsOptional()
    @IsString()
    name: string

    @ApiProperty({example:`test${random(1000,9999)}@mailinator.com`})
    @IsEmail()
    @IsString()
    email: string
}
