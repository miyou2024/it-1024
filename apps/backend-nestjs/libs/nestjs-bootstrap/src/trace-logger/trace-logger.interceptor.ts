import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
import { ClsService } from 'nestjs-cls';
import { Request, Response } from 'express';
import { NestjsBootstrapService } from '../nestjs-bootstrap.service';

@Injectable()
export class TraceLoggerInterceptor implements NestInterceptor {
  constructor(
    private readonly clsService: ClsService,
    private readonly nestjsBootstrapService: NestjsBootstrapService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const RequestId = this.clsService.getId();
    return next.handle().pipe(
      tap(() => {
        const request = context.switchToHttp().getRequest<Request>();
        const response = context.switchToHttp().getResponse<Response>();
        const requestUrl = request.url;
        const isSSE = response.getHeader('content-type') === 'text/event-stream';
        if (!requestUrl.includes('consul-health') && !isSSE) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const curRequestStacks = this.nestjsBootstrapService.getRequestLog(RequestId);
          console.log(
            `CurRequest<===>Success<===>${RequestId}<===>${requestUrl}`,
            curRequestStacks
          );
        }
      }),
    );
  }
}
