import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClsService } from 'nestjs-cls';
import { Request } from 'express';

@Injectable()
export class RequestIdInterceptor implements NestInterceptor {
  constructor(private readonly cls: ClsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.bindUserIP(context);
    return next.handle();
  }

  bindUserIP(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const userIp = request.connection.remoteAddress;
    console.log(`bindUserIP: ${userIp}`);
    this.cls.set('UserIP', userIp);
    return this;
  }
}
