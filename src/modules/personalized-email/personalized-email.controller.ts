import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalizedEmailService } from './personalized-email.service';
import { CreatePersonalizedEmailDto } from './dto/create-personalized-email.dto';
import { UpdatePersonalizedEmailDto } from './dto/update-personalized-email.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Personalized Emails')
@Controller('personalized-email')
export class PersonalizedEmailController {
  constructor(private readonly personalizedEmailService: PersonalizedEmailService) {}

  @Post()
  create(@Body() createPersonalizedEmailDto: CreatePersonalizedEmailDto) {
    return this.personalizedEmailService.create(createPersonalizedEmailDto);
  }

  // @Get()
  // findAll() {
  //   return this.personalizedEmailService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.personalizedEmailService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePersonalizedEmailDto: UpdatePersonalizedEmailDto) {
  //   return this.personalizedEmailService.update(+id, updatePersonalizedEmailDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.personalizedEmailService.remove(+id);
  // }
}
