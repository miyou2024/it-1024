import { Module } from '@nestjs/common';
import { ForgetAccountController } from './forget-account.controller';
import { ForgetAccountService } from './forget-account.service';

@Module({
  controllers: [ForgetAccountController],
  providers: [ForgetAccountService]
})
export class ForgetAccountModule {}
