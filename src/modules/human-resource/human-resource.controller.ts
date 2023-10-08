import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HumanResourceService } from './human-resource.service';
import { CreateHumanResourceDto } from './dto/create-human-resource.dto';
import { UpdateHumanResourceDto } from './dto/update-human-resource.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetAllHumanResources } from './dto/getAll-human-resouce.dto';
import { getSuccessResponse } from 'utils';

@ApiTags('Human Resource')
@Controller('human-resource')
export class HumanResourceController {
  constructor(private readonly humanResourceService: HumanResourceService) { }

  @Post()
  async create(@Body() createHumanResourceDto: CreateHumanResourceDto) {

    const response = await this.humanResourceService.create(createHumanResourceDto);
    return getSuccessResponse({ message: 'Created Successfully.', response })
  }

  @Get()
  async findAll(@Query() getAllHumanResourcesDto: GetAllHumanResources) {
    const response = await this.humanResourceService.findAll(getAllHumanResourcesDto);
    return getSuccessResponse({ message: 'Fetched successfully', response })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.humanResourceService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateHumanResourceDto: UpdateHumanResourceDto) {
  //   return this.humanResourceService.update(+id, updateHumanResourceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.humanResourceService.remove(+id);
  // }
}
