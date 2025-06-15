import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { TraceLoggerService } from '../trace-logger/trace-logger.service';
import { ClsService } from 'nestjs-cls';
import { NestBootstrapService } from '../nest-bootstrap.service';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationRequestPipe implements PipeTransform {
  constructor(
    private readonly traceLogger: TraceLoggerService,
    private readonly clsService: ClsService,
    private readonly nestBootstrapService: NestBootstrapService,
  ) {
    this.traceLogger.setContext(ValidationRequestPipe.name);
  }

  async transform(value: any, metadata: ArgumentMetadata) {
    const id = this.clsService.getId();

    console.log(`validation.transform`, value, metadata);

    this.nestBootstrapService.appendRequestLog(id, {
      message: `ValidationPipe.transform:接收参数(value)`,
    });

    if (!metadata.metatype || !this.toValidate(metadata.metatype)) {
      return value;
    }
    const object = plainToInstance(metadata.metatype, value);
    const errors = await validate(object);
    if (errors.length) {
      this.nestBootstrapService.appendRequestLog(id, errors);
      this.traceLogger.debug(
        {
          BodyError: errors,
        },
        'ValidationPipe.transform:Error',
      );
      const errorObjs = errors[0].constraints;
      if (typeof errorObjs === 'object') {
        const errProps = Object.keys(errorObjs as object);
        if (errProps.length) {
          const firstError = errorObjs[errProps[0]];
          throw new BadRequestException(firstError);
        }
      }
    } else {
      this.nestBootstrapService.appendRequestLog(id, 'ValidationPipe.transform:Success');
      this.traceLogger.debug(
        {
          BodySuccess: 'Success',
        },
        'ValidationPipe.transform:Success',
      );
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
