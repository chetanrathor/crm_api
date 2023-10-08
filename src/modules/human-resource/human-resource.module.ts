import { Module } from '@nestjs/common';
import { HumanResourceService } from './human-resource.service';
import { HumanResourceController } from './human-resource.controller';
import { HumanResourceRepository } from './repository/human-resource.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HumanResource } from './entities/human-resource.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HumanResource])],
  controllers: [HumanResourceController],
  providers: [HumanResourceService, HumanResourceRepository]
})
export class HumanResourceModule { }
