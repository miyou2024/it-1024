import { Module } from '@nestjs/common';
import { LoginMobileController } from './controller/login-mobile.controller';
import { LoginEmailController } from './controller/login-email.controller';
import { LoginUserController } from './controller/login-user.controller';
import { LoginUserService } from './service/login-user.service';
import { LoginEmailService } from './service/login-email.service';
import { LoginMobileService } from './service/login-mobile.service';

@Module({
  controllers: [LoginMobileController, LoginEmailController, LoginUserController],
  providers: [LoginUserService, LoginEmailService, LoginMobileService],
  imports: [],
})
export class ApiModule {}
