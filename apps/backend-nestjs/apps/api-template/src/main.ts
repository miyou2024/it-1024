import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startGlobalApp } from "@miyou2024/nestjs-bootstrap";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false // 关闭 Nestjs  默认日志
  });
  await startGlobalApp(app);
}
bootstrap();
