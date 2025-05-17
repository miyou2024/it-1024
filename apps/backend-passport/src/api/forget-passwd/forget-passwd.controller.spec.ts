import { Test, TestingModule } from '@nestjs/testing';
import { ForgetPasswdController } from './forget-passwd.controller';

describe('ForgetPasswdController', () => {
  let controller: ForgetPasswdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForgetPasswdController],
    }).compile();

    controller = module.get<ForgetPasswdController>(ForgetPasswdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
