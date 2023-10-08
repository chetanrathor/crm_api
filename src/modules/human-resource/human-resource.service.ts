import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { And, FindOptionsOrderValue, FindOptionsWhere, ILike } from 'typeorm';
import { getSuccessResponse, processPagination } from 'utils';
import { CreateHumanResourceDto } from './dto/create-human-resource.dto';
import { GetAllHumanResources } from './dto/getAll-human-resouce.dto';
import { UpdateHumanResourceDto } from './dto/update-human-resource.dto';
import { HumanResource } from './entities/human-resource.entity';
import { HumanResourceRepository } from './repository/human-resource.repository';

@Injectable()
export class HumanResourceService {

  constructor(private readonly repository: HumanResourceRepository) { }


  async create(createHumanResourceDto: CreateHumanResourceDto) {
    const { email } = createHumanResourceDto
    const hr = await this.repository.findOne({ where: { email } })
    if (hr) throw new BadRequestException('An email id is already available.')
    const [name] = email.split('@')
    const result = await this.repository.save({ email, name })
    return result
  }

  async findAll(getAllHumanResourcesDto: GetAllHumanResources) {
    let { limit, offset, search, order } = getAllHumanResourcesDto
    const { skip, take } = processPagination({ limit, offset })
    const findWhere: FindOptionsWhere<HumanResource>[] = []
    let where = []
    if (search) {
      findWhere.push({ email: ILike(`%${search}%`) }, { name: ILike(`%${search}%`) })
    }

    let orderIn: FindOptionsOrderValue = order == 'ASC' || order == 'DESC' ? order : 'DESC'


    const [rows, count] = await this.repository.findAndCount({ where: findWhere.length ? findWhere : {}, relations: { personalizeEmails: true }, order: { createdAt: orderIn } })
    return { rows, count }
  }

  async findOne(id: string) {
    const response = await this.repository.findOne({ where: { id }, relations: { personalizeEmails: true } })
    if (!response) throw new NotFoundException('HR not found.')
    return getSuccessResponse({ message: 'HR detail fetch successfully', response })
  }

  update(id: number, updateHumanResourceDto: UpdateHumanResourceDto) {
    return `This action updates a #${id} humanResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} humanResource`;
  }
}
