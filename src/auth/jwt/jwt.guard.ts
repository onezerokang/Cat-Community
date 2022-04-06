import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// AuthGuard는 Strategy를 자동으로 실행해준다.
// Strategy는 validate 함수를 실행한다(인증)
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
