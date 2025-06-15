import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    // logger: false // 关闭 Nestjs  默认日志
  });

  /**
   * swagger config
   */
  const config = new DocumentBuilder()
    .setTitle('NestjsTemplate Service')
    .setDescription(`NestjsTemplate ${new Date().toLocaleString('zh-Hans-CN')}`)
    .setVersion(`${new Date().toLocaleString('zh-Hans-CN')}`)
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory, {
    jsonDocumentUrl: 'swagger.json',
    yamlDocumentUrl: 'swagger.yaml',
  });

  app.setGlobalPrefix('nestjs-template-api');

  // app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  await app.listen(process.env.PORT ?? 3000, '127.0.0.1');

  Logger.log(`Application is running on: ${await app.getUrl()}/docs`);
}
bootstrap();
