import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString, IsEmail } from "class-validator"
import { random } from "lodash"

export class CreatePersonalizedEmailDto {

    @ApiPropertyOptional({ enumName: 'test' })
    @IsOptional()
    @IsString()
    subject: string

    @ApiProperty({ example: `Hello Hr Manager` })
    @IsString()
    body: string


    @ApiProperty({ example: `68d6d670-b756-4d47-8ea2-6e91b4bc4439` })
    @IsString()
    humanResource: string
}
