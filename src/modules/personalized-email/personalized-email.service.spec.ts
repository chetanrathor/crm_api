import { Test, TestingModule } from '@nestjs/testing';
import { PersonalizedEmailService } from './personalized-email.service';

describe('PersonalizedEmailService', () => {
  let service: PersonalizedEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalizedEmailService],
    }).compile();

    service = module.get<PersonalizedEmailService>(PersonalizedEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
