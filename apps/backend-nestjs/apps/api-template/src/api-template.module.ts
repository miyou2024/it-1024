import { Module } from '@nestjs/common';
import { ApiTemplateController } from './api-template.controller';
import { ApiTemplateService } from './api-template.service';
import { NestjsBootstrapModule } from "@miyou2024/nestjs-bootstrap";

@Module({
  imports: [
    NestjsBootstrapModule.register(),
  ],
  controllers: [ApiTemplateController],
  providers: [ApiTemplateService],
})
export class ApiTemplateModule {}
