import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { NestBootstrapModule } from './nest-bootstrap/nest-bootstrap.module';

@Module({
  imports: [ApiModule, NestBootstrapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
