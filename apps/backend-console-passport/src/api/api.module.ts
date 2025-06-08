import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { ForgetPasswdModule } from './forget-passwd/forget-passwd.module';
import { ForgetAccountModule } from './forget-account/forget-account.module';

@Module({
  controllers: [],
  providers: [],
  imports: [LoginModule, ForgetPasswdModule, ForgetAccountModule],
})
export class ApiModule {}
