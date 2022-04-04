import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // interceptor는 컨트롤러가 반환한 데이터를 가공할 때 사용한다.
    console.log('Before...');

    // data가 컨트롤러에서 반환한 데이터다.
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
      })),
    );
  }
}
