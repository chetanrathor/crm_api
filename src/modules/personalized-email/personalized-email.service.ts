import { Injectable } from '@nestjs/common';
import { HumanResource } from 'modules/human-resource/entities/human-resource.entity';
import { getSuccessResponse } from 'utils';
import { CreatePersonalizedEmailDto } from './dto/create-personalized-email.dto';
import { UpdatePersonalizedEmailDto } from './dto/update-personalized-email.dto';
import { PersonalizedEmailRepository } from './repository/personalized-email.repository';

@Injectable()
export class PersonalizedEmailService {

  constructor(
    private readonly repository: PersonalizedEmailRepository
  ) { }

  async create(createPersonalizedEmailDto: CreatePersonalizedEmailDto) {
    const { humanResource, ...rest } = createPersonalizedEmailDto
    const humanResourceObj = new HumanResource()
    humanResourceObj.id = humanResource

    const emailData = {
      ...rest,
      humanResource: humanResourceObj

    }
    const response = await this.repository.save(emailData)

    return getSuccessResponse({message:'Email Sent Successfully,', response})

  }
}
