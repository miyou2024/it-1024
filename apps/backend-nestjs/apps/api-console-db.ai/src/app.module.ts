import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestjsBootstrapModule } from "@miyou2024/nestjs-bootstrap";
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    NestjsBootstrapModule.register({
      loadConfigFiles: ['config/config.db.ai.yaml']
    }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
