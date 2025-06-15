import { Controller, Get } from '@nestjs/common';
import { ApiTemplateService } from './api-template.service';
import { TraceLoggerService } from "@miyou2024/nestjs-bootstrap";

@Controller()
export class ApiTemplateController {
  constructor(
    private readonly apiTemplateService: ApiTemplateService,
    private readonly logger: TraceLoggerService,
  ) {
    this.logger.setContext(this.constructor.name);
  }

  @Get()
  getHello(): string {
    this.logger.debug('getHello');
    return this.apiTemplateService.getHello();
  }
}
