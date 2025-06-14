import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});

  /**
   * swagger config
   */
  const config = new DocumentBuilder()
    .setTitle('APIConsoleDevops Service')
    .setDescription(`APIConsoleDevops ${new Date().toLocaleString('zh-Hans-CN')}`)
    .setVersion(`${new Date().toLocaleString('zh-Hans-CN')}`)
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory, {
    jsonDocumentUrl: 'swagger.json',
    yamlDocumentUrl: 'swagger.yaml',
  });

  app.setGlobalPrefix('console-devops-api');

  // app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  await app.listen(process.env.PORT ?? 3000, '127.0.0.1');

  console.log(await app.getUrl());
}
bootstrap();
