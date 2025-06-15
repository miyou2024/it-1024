import { Module } from '@nestjs/common';
import { NamespaceController } from './controller/namespace.controller';
import { NamespaceService } from './service/namespace.service';
import { NestBootstrapModule } from '#src/nest-bootstrap/nest-bootstrap.module';

@Module({
  imports: [
    NestBootstrapModule,
  ],
  controllers: [NamespaceController],
  providers: [NamespaceService],
})
export class ApiModule {}
