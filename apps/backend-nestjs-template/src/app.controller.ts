import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TraceLoggerService } from '#src/nest-bootstrap/trace-logger/trace-logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly traceLogger: TraceLoggerService,
  ) {
    this.traceLogger.setContext(this.constructor.name);
  }

  @Get()
  getHello(
    @Query('name') name: string,
    @Query('q') q: string
  ): string {
    console.log('getHello controller');
    this.traceLogger.debug(`getHello ${name} - ${q}`);
    return this.appService.getHello();
  }
}
