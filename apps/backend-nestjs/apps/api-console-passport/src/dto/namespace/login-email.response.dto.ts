import { PickType } from '@nestjs/swagger';
import { LoginCommonDto } from './login-common.dto';

export class LoginEmailResponseDto extends PickType(LoginCommonDto, ['userEmail']){}
