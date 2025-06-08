import { ApiProperty } from '@nestjs/swagger';

export class LoginEmailRequestDto {
   @ApiProperty({
    description: '邮箱',
  })
  email: string;
}
