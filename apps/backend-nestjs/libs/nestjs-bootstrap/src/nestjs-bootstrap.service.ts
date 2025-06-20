import { Injectable } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class NestjsBootstrapService {
  constructor(private readonly clsService: ClsService) {}

  getClsByKey(key: string) {
    return this.clsService.get(key);
  }

  appendRequestLog(key: string, value: any) {
    let keyData = this.getClsByKey(key);
    if (!keyData) {
      keyData = [];
    }
    if (Array.isArray(keyData)) {
      keyData.push(
        {
          MsgValue: value,
          MsgTime: new Date().toLocaleString('zh-hans') + `${performance.now()}`,
        }
      );
      this.clsService.set(key, keyData);
      return keyData;
    }
    return null;
  }

  getRequestLog(key: string) {
    let keyData = this.getClsByKey(key);
    if (!keyData) {
      keyData = [];
    }
    return keyData;
  }
}
