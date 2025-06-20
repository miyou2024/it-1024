import { Injectable } from '@nestjs/common';
import { TraceLoggerService } from '@miyou2024/nestjs-bootstrap';

@Injectable()
export class LoginUserService {
  constructor(
    private readonly logger: TraceLoggerService,
  ) {
    this.logger.setContext(this.constructor.name);
  }
  async login() {
    this.logger.debug(`LoginUserService`)
  }
}
