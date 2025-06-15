import { Injectable } from '@nestjs/common';
import { TraceLoggerService } from "@miyou2024/nestjs-bootstrap";

@Injectable()
export class ApiTemplateService {
  constructor(
    private readonly logger: TraceLoggerService,
  ) {
    this.logger.setContext(this.constructor.name);
  }
  getHello(): string {
    this.logger.log(`Hello World`)
    return 'Hello World!';
  }
}
