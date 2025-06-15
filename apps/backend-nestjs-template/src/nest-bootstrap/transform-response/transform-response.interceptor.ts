import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  constructor(
    private readonly clsService: ClsService,
  ) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('TransformResponseInterceptor');
    const RequestId = this.clsService.getId();
    return next.handle().pipe(
      map((data) => {
        const CurDateTime = Date.now();
        if (!data) {
          return data;
        }
        if (typeof data === 'string') {
          return {
            code: 1,
            message: data,
            msg: data,
            RequestId,
            CurDateTime,
          };
        }
        if (Array.isArray(data)) {
          return {
            code: 200,
            data: {
              list: data,
            },
            RequestId,
            CurDateTime,
          };
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (data.constructor === Object) {
          return {
            code: 200,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            data,
            RequestId,
            CurDateTime,
          };
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return data;
      }),
    );
  }
}
