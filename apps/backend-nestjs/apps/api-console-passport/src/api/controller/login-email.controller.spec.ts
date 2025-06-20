import { Test, TestingModule } from '@nestjs/testing';
import { LoginEmailController } from './login-email.controller';

describe('LoginEmailController', () => {
  let controller: LoginEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginEmailController],
    }).compile();

    controller = module.get<LoginEmailController>(LoginEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
