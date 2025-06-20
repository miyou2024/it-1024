import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApiCommonResponseDetail } from '../../dto/common';
import {
  LoginEmailRequestDto,
  LoginEmailResponseDto
} from '../../dto/namespace';
import { LoginEmailService } from '../service/login-email.service';

@Controller('login-email')
export class LoginEmailController {

  constructor(
    private readonly loginEmailService: LoginEmailService,
  ) {
  }

  @ApiOperation({
    summary: 'Use email login',
    description: 'Use email login',
  })
  @ApiCommonResponseDetail(LoginEmailResponseDto)
  @Post()
  create(@Body() body: LoginEmailRequestDto) {
    return {
      body,
    };
  }
}
