import { ApiProperty } from '@nestjs/swagger';

export class LoginPhoneRequestDto {
  @ApiProperty({
    description: '手机号',
  })
  phone: string;
}
