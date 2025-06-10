import { ApiProperty } from '@nestjs/swagger';

export class NamespaceCommonDto {
  @ApiProperty({
    description: 'namespace name',
  })
  nsName: string;

  @ApiProperty({
    description: 'namespace code',
  })
  nsCode: string;
}
