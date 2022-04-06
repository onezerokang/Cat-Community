import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class ReadOnlyDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({ example: '43913', description: 'id' })
  id: string;
}
