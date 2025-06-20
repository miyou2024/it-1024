import { PickType } from '@nestjs/swagger';
import { LoginCommonDto } from './login-common.dto';

export class LoginMobileRequestDto extends PickType(LoginCommonDto, ['userMobile', "validateCode"]){}
