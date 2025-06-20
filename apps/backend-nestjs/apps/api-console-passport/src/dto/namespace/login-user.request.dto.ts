import { PickType } from '@nestjs/swagger';
import { LoginCommonDto } from './login-common.dto';

export class LoginUserRequestDto extends PickType(LoginCommonDto, ['userName', "userPasswd"]){}
