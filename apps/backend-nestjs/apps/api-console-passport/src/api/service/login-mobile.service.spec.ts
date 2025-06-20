import { Test, TestingModule } from '@nestjs/testing';
import { LoginMobileService } from './login-mobile.service';

describe('LoginMobileService', () => {
  let service: LoginMobileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginMobileService],
    }).compile();

    service = module.get<LoginMobileService>(LoginMobileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
