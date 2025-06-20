import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApiCommonResponseDetail } from '../../dto/common';
import {
  LoginMobileRequestDto,
  LoginMobileResponseDto
} from '../../dto/namespace';
import { LoginMobileService } from '../service/login-mobile.service';

@Controller('login-mobile')
export class LoginMobileController {

  constructor(
    private readonly loginMobileService: LoginMobileService,
  ) {
  }

  @ApiOperation({
    summary: 'Use email login',
    description: 'Use email login',
  })
  @ApiCommonResponseDetail(LoginMobileResponseDto)
  @Post()
  create(@Body() body: LoginMobileRequestDto) {
    return {
      body,
    };
  }
}
