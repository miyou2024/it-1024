import { ApiProperty } from '@nestjs/swagger';

export class LoginAccountRequestDto {
  @ApiProperty({
    description: '手机号/邮箱/用户名',
  })
  account: string;
}
