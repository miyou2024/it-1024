import { Test, TestingModule } from '@nestjs/testing';
import { ForgetAccountService } from './forget-account.service';

describe('ForgetAccountService', () => {
  let service: ForgetAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForgetAccountService],
    }).compile();

    service = module.get<ForgetAccountService>(ForgetAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
