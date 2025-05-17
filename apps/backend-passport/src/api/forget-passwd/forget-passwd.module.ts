import { Module } from '@nestjs/common';
import { ForgetPasswdController } from './forget-passwd.controller';
import { ForgetPasswdService } from './forget-passwd.service';

@Module({
  controllers: [ForgetPasswdController],
  providers: [ForgetPasswdService]
})
export class ForgetPasswdModule {}
