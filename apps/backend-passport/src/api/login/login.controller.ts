import { ApiCommonResponseDetail } from '#dto/common';
import {
  LoginAccountRequestDto,
  LoginAccountResponseDto,
  LoginEmailRequestDto,
  LoginEmailResponseDto,
  LoginPhoneRequestDto,
  LoginPhoneResponseDto,
} from '#dto/login';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('login')
export class LoginController {
  @ApiOperation({
    summary: '账号+密码',
    description: '账号可以是手机号/邮箱/设置的用户名,同时设置了密码。',
  })
  @ApiCommonResponseDetail(LoginAccountResponseDto)
  @Post('account')
  account(@Body() body: LoginAccountRequestDto) {
    return {
      body,
    };
  }

  @ApiOperation({
    summary: '手机号+验证码',
    description: '当手机号不存在时，会自动创建账号',
  })
  @ApiCommonResponseDetail(LoginPhoneResponseDto)
  @Post('phone')
  phone(@Body() body: LoginPhoneRequestDto) {
    return {
      body,
    };
  }

  @ApiOperation({
    summary: '邮箱+验证码',
    description: '当邮箱不存在时，会自动创建账号',
  })
  @ApiCommonResponseDetail(LoginEmailResponseDto)
  @Post('email')
  email(@Body() body: LoginEmailRequestDto) {
    return {
      body,
    };
  }
}
