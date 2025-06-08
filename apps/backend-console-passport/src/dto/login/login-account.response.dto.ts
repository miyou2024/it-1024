import { ApiProperty } from '@nestjs/swagger';

export class LoginAccountResponseDto {
  @ApiProperty({
    description: '登录令牌',
  })
  accessToken: string;

  @ApiProperty({
    description: '令牌过期时用来自动刷新的令牌',
  })
  refreshToken: string;
}
