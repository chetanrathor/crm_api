import { PartialType } from '@nestjs/swagger';
import { CreatePersonalizedEmailDto } from './create-personalized-email.dto';

export class UpdatePersonalizedEmailDto extends PartialType(CreatePersonalizedEmailDto) {}
