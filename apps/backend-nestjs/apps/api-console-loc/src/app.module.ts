import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestjsBootstrapModule } from "@miyou2024/nestjs-bootstrap";

@Module({
  imports: [
    NestjsBootstrapModule.register({
      loadConfigFiles: ['config/config.loc.yaml']
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
