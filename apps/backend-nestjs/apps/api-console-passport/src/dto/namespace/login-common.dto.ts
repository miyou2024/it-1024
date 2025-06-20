import { ApiProperty } from '@nestjs/swagger';

export class LoginCommonDto {
  @ApiProperty({
    description: 'username',
  })
  userName: string;

  @ApiProperty({
    description: 'user mobile',
  })
  userMobile: string;

  @ApiProperty({
    description: 'user email',
  })
  userEmail: string;

  @ApiProperty({
    description: 'user passwd',
  })
  userPasswd: string;

  @ApiProperty({
    description: 'validate code',
  })
  validateCode: string;
}
