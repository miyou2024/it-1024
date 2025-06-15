import { Global, Module } from '@nestjs/common';
import { ClsModule, ClsService } from 'nestjs-cls';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { Request, Response } from 'express';
import { v4 } from 'uuid';
import { TraceLoggerInterceptor } from './trace-logger/trace-logger.interceptor';
import { TraceLoggerService } from './trace-logger/trace-logger.service';
import { NestjsBootstrapService } from './nestjs-bootstrap.service';
import { RequestIdInterceptor } from './auto-bind/request-id/request-id.interceptor';
import { TransformResponseInterceptor } from './transform-response/transform-response.interceptor';
import { ValidationRequestPipe } from './validation-request/validation-request.pipe';
import { ConfigModule } from "@nestjs/config";
import { loadGlobalConfig } from "./nestjs-bootstrap.util";
import { INestjsBootstrapModuleOptions } from './nestjs-bootstrap.interface';

@Global()
@Module({})
export class NestjsBootstrapModule {
  static register(options?: INestjsBootstrapModuleOptions) {
    return {
      global: true,
      module: NestjsBootstrapModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [
            loadGlobalConfig([
              'config/config.yaml',
              'config/config.sample.yaml',
              ...options?.loadConfigFiles || []
            ]),
          ],
        }),
        ClsModule.forRoot({
          global: true,
          middleware: {
            mount: true,
            generateId: true,
            idGenerator(req: Request) {
              const RequestID = req.headers['x-request-id'] ?? v4();
              console.log(`idGenerator`, req.headers['x-request-id']);
              req.headers['x-request-id'] = RequestID;
              return (req.headers['x-request-id'] as string) ?? v4();
            },
            setup(cls: ClsService, req: Request, res: Response) {
              console.log(`setup`, req.headers['x-request-id']);
              cls.set('setup-id', req.headers['x-request-id']);
            },
          },
        }),
      ],
      providers: [
        TraceLoggerService,
        {
          provide: APP_PIPE,
          useClass: ValidationRequestPipe,
        },
        {
          provide: APP_INTERCEPTOR,
          useClass: RequestIdInterceptor,
        },
        {
          provide: APP_INTERCEPTOR,
          useClass: TransformResponseInterceptor,
        },
        {
          provide: APP_INTERCEPTOR,
          useClass: TraceLoggerInterceptor,
        },
        NestjsBootstrapService,
      ],
      exports: [TraceLoggerService],
    };
  }
}
