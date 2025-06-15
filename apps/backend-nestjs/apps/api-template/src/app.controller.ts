import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TraceLoggerService } from "@miyou2024/nestjs-bootstrap";

@Controller()
export class AppController {
  constructor(
    private readonly apiTemplateService: AppService,
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
