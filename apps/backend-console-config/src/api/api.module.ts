import { Module } from '@nestjs/common';
import { NamespaceController } from './controller/namespace.controller';
import { ConfigurationController } from './controller/configuration.controller';
import { VersionController } from './controller/version.controller';
import { NamespaceService } from './service/namespace.service';
import { ConfigurationService } from './service/configuration.service';
import { VersionService } from './service/version.service';
import { ReleaseController } from './controller/release.controller';
import { ReleaseService } from './service/release.service';

@Module({
  controllers: [NamespaceController, ConfigurationController, VersionController, ReleaseController],
  providers: [NamespaceService, ConfigurationService, VersionService, ReleaseService],
  imports: [],
})
export class ApiModule {}
