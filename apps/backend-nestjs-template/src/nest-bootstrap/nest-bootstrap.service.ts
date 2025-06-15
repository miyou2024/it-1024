import { Injectable } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class NestBootstrapService {
  constructor(private readonly clsService: ClsService) {}

  getClsByKey(key: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.clsService.get(key);
  }

  appendRequestLog(key: string, value: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let keyData = this.getClsByKey(key);
    if (!keyData) {
      keyData = [];
    }
    if (Array.isArray(keyData)) {
      keyData.push(`${JSON.stringify(value)} ---> ${new Date().toLocaleString('zh-hans')}`);
      this.clsService.set(key, keyData);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return keyData;
    }
    return null;
  }

  getRequestLog(key: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let keyData = this.getClsByKey(key);
    if (!keyData) {
      keyData = [];
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return keyData;
  }
}
