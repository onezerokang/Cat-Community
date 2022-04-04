import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  HttpException,
} from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // transform 함수에서 반환된 값이 pipe에서 처리된 값이다.
    if (value < 0) {
      throw new HttpException('value > 0', 400);
    }
    return value;
  }
}
