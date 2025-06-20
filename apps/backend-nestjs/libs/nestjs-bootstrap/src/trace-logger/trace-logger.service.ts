import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { NestjsBootstrapService } from '../nestjs-bootstrap.service';

@Injectable({ scope: Scope.TRANSIENT })
export class TraceLoggerService extends ConsoleLogger {
  constructor(
    private readonly clsService: ClsService,
    private readonly nestjsBootstrapService: NestjsBootstrapService,
  ) {
    super();
  }

  setContext(context: string) {
    super.setContext(`${this.constructor.name}-${context}`);
  }

  private transferMessage(message: any) {
    return typeof message === 'object' ? JSON.stringify(message) : message;
  }

  private setRequestId(message: any, level?: string) {
    const msgArr: string[] = [];
    if (Array.isArray(message)) {
      for (let i = (message as []).length - 1; i >= 0; i--) {
        const msgItem = message[i];
        msgArr.push(this.transferMessage(msgItem));
      }
    } else {
      msgArr.push(this.transferMessage(message));
    }
    const requestID = this.clsService.getId() || this.clsService.get('RequestId');
    if (!requestID) {
      return `${msgArr.join(' --- ')}`;
    }
    //    console.log('setRequestId', message);
    const msg = msgArr.join(' --- ');
    this.nestjsBootstrapService.appendRequestLog(requestID, {
      message: msg,
      context: this.context,
    });
    return `[RequestId=${requestID}] ${msg}`;
  }

  override error(...message: any) {
    super.error(this.setRequestId(message, 'error'));
  }

  override debug(...message: any) {
    // this.logger.debug('pino-logger-debug');
    super.debug(this.setRequestId(message, 'debug'));
  }

  override log(...message: any) {
    super.log(this.setRequestId(message, 'log'));
  }

  override warn(...message: any) {
    super.warn(this.setRequestId(message, 'warn'));
  }

  override verbose(...message: any) {
    super.verbose(this.setRequestId(message, 'verbose'));
  }
}
