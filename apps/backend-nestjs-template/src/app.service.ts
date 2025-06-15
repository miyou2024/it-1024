import { Injectable } from '@nestjs/common';
import { TraceLoggerService } from '#src/nest-bootstrap/trace-logger/trace-logger.service';

@Injectable()
export class AppService {
  constructor(private readonly traceLogger: TraceLoggerService) {
    this.traceLogger.setContext(this.constructor.name);
  }
  getHello(): string {
    this.traceLogger.debug('getHello service');
    return 'Hello World!';
  }
}
