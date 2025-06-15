import { Test, TestingModule } from '@nestjs/testing';
import { ApiTemplateController } from './api-template.controller';
import { ApiTemplateService } from './api-template.service';

describe('ApiTemplateController', () => {
  let apiTemplateController: ApiTemplateController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiTemplateController],
      providers: [ApiTemplateService],
    }).compile();

    apiTemplateController = app.get<ApiTemplateController>(ApiTemplateController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiTemplateController.getHello()).toBe('Hello World!');
    });
  });
});
