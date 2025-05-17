import { Test, TestingModule } from '@nestjs/testing';
import { ForgetAccountController } from './forget-account.controller';

describe('ForgetAccountController', () => {
  let controller: ForgetAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForgetAccountController],
    }).compile();

    controller = module.get<ForgetAccountController>(ForgetAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
