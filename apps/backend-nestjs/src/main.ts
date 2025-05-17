import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonModule } from 'nest-winston';
import { createLogger } from 'winston';

async function bootstrap() {
  const instance = createLogger({
    // options of Winston
  });

  const app = await NestFactory.create(AppModule, {
    // logger: WinstonModule.createLogger({
    //   instance,
    // }),
  });

  /**
   * swagger config
   */
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  // app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  await app.listen(process.env.PORT ?? 3000, '127.0.0.1');

  console.log(await app.getUrl());
}
bootstrap();
