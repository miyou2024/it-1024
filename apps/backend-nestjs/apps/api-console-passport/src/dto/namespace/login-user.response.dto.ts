import { PickType } from '@nestjs/swagger';
import { LoginCommonDto } from './login-common.dto';

export class LoginUserResponseDto extends PickType(LoginCommonDto, ['userName']){}
