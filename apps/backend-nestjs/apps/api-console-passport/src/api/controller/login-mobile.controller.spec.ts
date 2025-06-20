import { Test, TestingModule } from '@nestjs/testing';
import { LoginMobileController } from './login-mobile.controller';

describe('LoginMobileController', () => {
  let controller: LoginMobileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginMobileController],
    }).compile();

    controller = module.get<LoginMobileController>(LoginMobileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
