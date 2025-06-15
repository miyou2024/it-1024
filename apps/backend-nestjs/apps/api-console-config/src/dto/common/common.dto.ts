import { ApiProperty } from '@nestjs/swagger';

export class CommonDto {
  @ApiProperty({
    description: 'auto increment id',
  })
  id: number;

  @ApiProperty({
    description: 'description',
  })
  remark: string;

  @ApiProperty({
    description: 'system status',
  })
  status: number;

  @ApiProperty({
    description: 'default: orderBy sort asc',
  })
  sort: number;

  @ApiProperty({
    description: 'system create time',
  })
  createTime: string;

  @ApiProperty({
    description: 'system create user',
  })
  createUser: number;

  @ApiProperty({
    description: 'system update time',
  })
  updateTime: string;

  @ApiProperty({
    description: 'system update user',
  })
  updateUser: number;

  @ApiProperty({
    description: 'system delete time',
  })
  deleteTime: string;

  @ApiProperty({
    description: 'system delete user',
  })
  deleteUser: number;
}
