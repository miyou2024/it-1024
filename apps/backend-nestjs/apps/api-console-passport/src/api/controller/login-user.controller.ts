import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApiCommonResponseDetail } from '../../dto/common';
import {
  LoginUserRequestDto,
  LoginUserResponseDto,
} from '../../dto/namespace';
import { LoginUserService } from '../service/login-user.service';
import { TraceLoggerService } from '@miyou2024/nestjs-bootstrap';

@Controller('login-user')
export class LoginUserController {

  constructor(
    private readonly logger: TraceLoggerService,
    private readonly loginUserService: LoginUserService,
  ) {
    this.logger.setContext(this.constructor.name);
  }

  @ApiOperation({
    summary: 'Use username login',
    description: 'Use username login',
  })
  @ApiCommonResponseDetail(LoginUserResponseDto)
  @Post()
  create(@Body() body: LoginUserRequestDto) {
    this.logger.log('login-user', body, body);
    this.loginUserService.login();
    return {
      body,
    };
  }
}
