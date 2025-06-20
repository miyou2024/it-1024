import { PickType } from '@nestjs/swagger';
import { LoginCommonDto } from './login-common.dto';

export class LoginEmailRequestDto extends PickType(LoginCommonDto, ['userEmail', "validateCode"]){}
