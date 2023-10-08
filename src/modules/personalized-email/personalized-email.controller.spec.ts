import { Test, TestingModule } from '@nestjs/testing';
import { PersonalizedEmailController } from './personalized-email.controller';
import { PersonalizedEmailService } from './personalized-email.service';

describe('PersonalizedEmailController', () => {
  let controller: PersonalizedEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalizedEmailController],
      providers: [PersonalizedEmailService],
    }).compile();

    controller = module.get<PersonalizedEmailController>(PersonalizedEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
