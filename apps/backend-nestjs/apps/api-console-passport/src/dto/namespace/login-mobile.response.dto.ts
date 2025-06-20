import { PickType } from '@nestjs/swagger';
import { LoginCommonDto } from './login-common.dto';

export class LoginMobileResponseDto extends PickType(LoginCommonDto, ['userMobile']){}
