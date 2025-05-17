import { Test, TestingModule } from '@nestjs/testing';
import { ForgetPasswdService } from './forget-passwd.service';

describe('ForgetPasswdService', () => {
  let service: ForgetPasswdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForgetPasswdService],
    }).compile();

    service = module.get<ForgetPasswdService>(ForgetPasswdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
