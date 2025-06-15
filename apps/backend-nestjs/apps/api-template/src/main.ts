import { NestFactory } from '@nestjs/core';
import { ApiTemplateModule } from './api-template.module';
import { startGlobalApp } from "@miyou2024/nestjs-bootstrap";

async function bootstrap() {
  const app = await NestFactory.create(ApiTemplateModule, {
    // logger: false // 关闭 Nestjs  默认日志
  });
  await startGlobalApp(app);
}
bootstrap();
