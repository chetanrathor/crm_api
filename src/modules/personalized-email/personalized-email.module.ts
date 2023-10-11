import { Module } from '@nestjs/common';
import { PersonalizedEmailService } from './personalized-email.service';
import { PersonalizedEmailController } from './personalized-email.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalizedEmail } from './entities/personalized-email.entity';
import { PersonalizedEmailRepository } from './repository/personalized-email.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalizedEmail])],
  controllers: [PersonalizedEmailController],
  providers: [PersonalizedEmailRepository,PersonalizedEmailService,],
  exports:[PersonalizedEmailService]
})
export class PersonalizedEmailModule {}
